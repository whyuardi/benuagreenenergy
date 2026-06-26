export default function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B1D13',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{
        width: 64,
        height: 64,
        borderRadius: 16,
        background: 'linear-gradient(135deg, #40916C, #52B788)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        fontSize: 28,
      }}>
        ⚡
      </div>
      <h1 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        marginBottom: 12,
      }}>
        WEB SEDANG DI UPDATE
      </h1>
      <p style={{
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.5)',
        maxWidth: 400,
        lineHeight: 1.6,
      }}>
        Kami sedang meningkatkan situs ini. Silakan kembali beberapa saat lagi.
      </p>
      <div style={{
        marginTop: 48,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.8rem',
      }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#52B788',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        Maintenance in progress
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
