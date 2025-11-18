#!/bin/bash
# Скрипт для перезагрузки Apache на HandyHost сервере
# Использование: ssh на сервер и выполните этот скрипт

echo "🔄 Перезагрузка Apache..."

# Попробуем разные способы перезагрузки Apache
if command -v systemctl &> /dev/null; then
    echo "Используем systemctl..."
    sudo systemctl restart apache2 2>/dev/null || sudo systemctl restart httpd 2>/dev/null
elif command -v service &> /dev/null; then
    echo "Используем service..."
    sudo service apache2 restart 2>/dev/null || sudo service httpd restart 2>/dev/null
elif [ -f /etc/init.d/apache2 ]; then
    echo "Используем init.d..."
    sudo /etc/init.d/apache2 restart
elif [ -f /etc/init.d/httpd ]; then
    echo "Используем init.d httpd..."
    sudo /etc/init.d/httpd restart
else
    echo "⚠️  Не удалось найти команду для перезагрузки Apache"
    echo "Попробуйте вручную через панель управления HandyHost"
    echo "Или выполните: sudo systemctl restart apache2"
fi

echo "✅ Готово!"
echo ""
echo "Проверьте статус:"
echo "  sudo systemctl status apache2"
echo "  или"
echo "  sudo service apache2 status"

