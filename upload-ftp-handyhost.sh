#!/bin/bash
# Скрипт для загрузки проекта через FTP на HandyHost

FTP_HOST="109.95.210.183"
FTP_USER="u188054"
FTP_PASS="cAThW0a4TwVF"
FTP_PORT="21"
LOCAL_FILE="zakupone-handyhost.zip"
REMOTE_DIR="www/zakup.one"

echo "📤 Загрузка проекта через FTP на HandyHost..."
echo "Host: $FTP_HOST"
echo "User: $FTP_USER"
echo ""

# Проверка наличия файла
if [ ! -f "$LOCAL_FILE" ]; then
    echo "❌ Ошибка: файл $LOCAL_FILE не найден!"
    exit 1
fi

echo "📦 Файл найден: $LOCAL_FILE ($(du -h "$LOCAL_FILE" | cut -f1))"
echo ""
echo "⚠️  Автоматическая загрузка через curl может не работать."
echo "Рекомендуется использовать FTP клиент (FileZilla, Cyberduck) или Finder."
echo ""
echo "Данные для подключения:"
echo "  Host: $FTP_HOST"
echo "  Port: $FTP_PORT"
echo "  User: $FTP_USER"
echo "  Pass: $FTP_PASS"
echo ""
echo "Путь на сервере: $REMOTE_DIR"
echo ""
echo "Для загрузки через Finder (Mac):"
echo "  Нажмите Cmd+K и введите:"
echo "  ftp://$FTP_USER:$FTP_PASS@$FTP_HOST"
echo ""
echo "Или используйте FileZilla/Cyberduck с указанными данными."

