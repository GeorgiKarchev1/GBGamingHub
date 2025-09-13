import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, game } = body

    // Validate required fields
    if (!name || !email || !phone || !game) {
      return NextResponse.json(
        { error: 'Всички полета са задължителни' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Невалиден email адрес' },
        { status: 400 }
      )
    }

    // Validate phone format (Bulgarian phone number)
    const phoneRegex = /^(\+359|0)[0-9]{8,9}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Невалиден телефонен номер' },
        { status: 400 }
      )
    }

    const hasTelegram = !!process.env.TELEGRAM_BOT_TOKEN && !!process.env.TELEGRAM_CHAT_ID

    if (!hasTelegram) {
      // In absence of Telegram setup, just acknowledge success for now.
      return NextResponse.json({
        success: true,
        message: 'Успешна регистрация!',
        registrationId: `TOUR-${Date.now()}`
      })
    }

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN as string
    const chatId = process.env.TELEGRAM_CHAT_ID as string

    const gameNames: { [key: string]: string } = {
      'cs2': 'Counter-Strike 2',
      'valorant': 'Valorant',
      'lol': 'League of Legends',
      'fifa': 'FIFA 24',
      'rocket-league': 'Rocket League'
    }

    const message = `🏆 *Нова регистрация за турнир от GB Gaming Hub*

👤 *Nickname:* ${name}
📧 *Email:* ${email}
📞 *Телефон:* ${phone}
🎮 *Игра:* ${gameNames[game] || game}

_Време на заявката: ${new Date().toLocaleString('bg-BG')}_`

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text()
      console.error('Telegram error:', error)
      return NextResponse.json({
        success: true,
        message: 'Успешна регистрация!',
        registrationId: `TOUR-${Date.now()}`
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Успешна регистрация!',
      registrationId: `TOUR-${Date.now()}`
    })

  } catch (error) {
    console.error('Tournament registration error:', error)
    return NextResponse.json(
      { error: 'Възникна грешка. Моля опитай отново.' },
      { status: 500 }
    )
  }
}