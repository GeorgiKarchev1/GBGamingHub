import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, phone, date, time, duration, platform, notes } = body || {}

    if (!fullName || !phone || !date || !time) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const hasTelegram = !!process.env.TELEGRAM_BOT_TOKEN && !!process.env.TELEGRAM_CHAT_ID

    if (!hasTelegram) {
      // In absence of Telegram setup, just acknowledge success for now.
      return NextResponse.json({ ok: true, message: 'Telegram service not configured.' })
    }

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN as string
    const chatId = process.env.TELEGRAM_CHAT_ID as string

    const message = `🎮 *Нова резервация от GB Gaming Hub*

👤 *Име:* ${fullName}
📞 *Телефон:* ${phone}
📅 *Дата:* ${date}
⏰ *Час:* ${time}
⏱️ *Продължителност:* ${duration || '-'}
🎯 *Платформа:* ${platform || '-'}
📝 *Бележки:* ${notes || '-'}

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
      return NextResponse.json({ message: 'Failed to send notification' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}


