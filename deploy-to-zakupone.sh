#!/bin/bash
# Скрипт для загрузки файлов в www/zakup.one/ и перезагрузки Apache

FTP_HOST="109.95.210.183"
FTP_USER="u188054"
FTP_PASS="cAThW0a4TwVF"
FTP_PORT="21"
REMOTE_DIR="www/zakup.one"

echo "📤 Загрузка файлов в $REMOTE_DIR..."

# Загружаем index.html
echo "Загрузка index.html..."
curl -T www/zakup.one/index.html \
     --user "$FTP_USER:$FTP_PASS" \
     ftp://$FTP_HOST:$FTP_PORT/$REMOTE_DIR/index.html

# Загружаем .htaccess
echo "Загрузка .htaccess..."
curl -T www/zakup.one/.htaccess \
     --user "$FTP_USER:$FTP_PASS" \
     ftp://$FTP_HOST:$FTP_PORT/$REMOTE_DIR/.htaccess

echo ""
echo "✅ Файлы загружены!"
echo ""
echo "📝 Теперь подключитесь по SSH и выполните:"
echo "   ssh u188054@109.95.210.183"
echo "   cd www/zakup.one"
echo "   chmod 644 index.html .htaccess"
echo "   sudo systemctl restart apache2"
echo ""
echo "Или используйте скрипт restart-apache.sh на сервере"

