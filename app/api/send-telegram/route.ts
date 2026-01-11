import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Telegram Bot Token и Chat ID (нужно будет заменить на реальные)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN'
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID'

    // Формируем сообщение
    const telegramMessage = `
🔔 *Новая заявка с сайта AMUDAGRO*

👤 *Имя:* ${name}
📧 *Email:* ${email}
📞 *Телефон:* ${phone}
📧 *Сообщение:*
${message}

⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
    `.trim()

    // Отправляем в Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
