'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline'

type Option = { label: string; value: string }

type SelectFieldProps = {
  label?: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  name?: string
}

export default function SelectField({ label, value, onChange, options, name }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-white/90 font-medium">{label}</label>}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white/5 py-3 pl-4 pr-10 text-left text-white border border-white/10 focus:outline-none focus:border-primary-green/50 focus:bg-white/10 transition-all">
            <span className="block truncate">{options.find(o => o.value === value)?.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/60">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-primary-black/95 backdrop-blur border border-white/10 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.value}
                  value={opt.value}
                  className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm ${active ? 'bg-white/10 text-white' : 'text-white/80'}`}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium text-white' : 'font-normal'}`}>{opt.label}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-green">
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {name && (
        // hidden input so native form submission still includes the value
        <input type="hidden" name={name} value={value} />
      )}
    </div>
  )
}


