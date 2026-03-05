import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

export const sendOrderNotification = async ( order ) => {
	const message = `
🛒 *Нове замовлення!*

👤 Ім'я: ${order.name}
📞 Телефон: ${order.phone}
📧 Email: ${order.email || 'не вказано'}
📦 Товар: ${order.product_title}
🔢 Кількість: ${order.quantity}
💬 Коментар: ${order.comment || 'немає'}
  `;

	await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
		parse_mode: 'Markdown'
	});
};