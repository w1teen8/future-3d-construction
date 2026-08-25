import { useId, useState, type FormEvent } from 'react'
import { CheckCircle2, Lock, Loader2 } from 'lucide-react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface EmailFormProps {
  className?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

// Both placements (Hero, CTA) sit on dark surfaces, so copy is styled light throughout.
export default function EmailForm({ className = '' }: EmailFormProps) {
  const inputId = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    // Frontend-only: simulate submission latency, then show success state.
    window.setTimeout(() => setStatus('success'), 700)
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex items-center gap-3 rounded-full border border-sage-400/40 bg-sage-400/10 px-5 py-3.5 text-sm font-medium text-sand ${className}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-sage-400" aria-hidden="true" />
        Дякуємо! Ми зв'яжемося з вами в числі перших.
      </div>
    )
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <label htmlFor={inputId} className="sr-only">
          Електронна пошта
        </label>
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Ваш e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
          className={`w-full min-w-0 rounded-full border bg-white/95 px-5 py-3.5 text-sm text-ink-950
            placeholder:text-ink-600/60 outline-none transition-colors duration-200 focus-visible:border-sage-400
            ${status === 'error' ? 'border-red-400' : 'border-transparent'}`}
        />
        <button type="submit" className="btn-primary shrink-0" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : null}
          Дізнатися першим
        </button>
      </form>
      <p
        id={status === 'error' ? `${inputId}-error` : undefined}
        role={status === 'error' ? 'alert' : undefined}
        className={`mt-2.5 flex items-center gap-1.5 text-xs ${
          status === 'error' ? 'text-red-400' : 'text-sand/50'
        }`}
      >
        {status === 'error' ? (
          'Перевірте, будь ласка, адресу e-mail.'
        ) : (
          <>
            <Lock className="h-3 w-3" aria-hidden="true" />
            Ми не передаємо ваші дані третім особам
          </>
        )}
      </p>
    </div>
  )
}
