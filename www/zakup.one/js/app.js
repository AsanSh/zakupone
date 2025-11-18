// Общие данные приложения
const AppData = {
    products: [
        {id: 1, name: 'Арматура A12', category: 'Арматура', unit: 'м', country: 'РФ', price: 85, supplier: 'ООО "СтройМатериалы"'},
        {id: 2, name: 'Арматура A14', category: 'Арматура', unit: 'м', country: 'Китай', price: 120, supplier: 'ТД "МеталлСтрой"'},
        {id: 3, name: 'Арматура A16', category: 'Арматура', unit: 'м', country: 'РФ', price: 150, supplier: 'ООО "СтройМатериалы"'},
        {id: 4, name: 'Арматура A18', category: 'Арматура', unit: 'шт', country: 'КР', price: 180, supplier: 'ИП "КиргизСтрой"'},
        {id: 5, name: 'Проволока вязальная', category: 'Арматура', unit: 'шт', country: 'КР', price: 90, supplier: 'ИП "КиргизСтрой"'},
        {id: 6, name: 'Перфоратор', category: 'Инструменты', unit: 'шт', country: 'РФ', price: 8500, supplier: 'ООО "ИнструментПро"'},
        {id: 7, name: 'Дрель', category: 'Инструменты', unit: 'шт', country: 'КР', price: 3500, supplier: 'ТД "Электроинструмент"'},
        {id: 8, name: 'Болгарка', category: 'Инструменты', unit: 'шт', country: 'КР', price: 5200, supplier: 'ТД "Электроинструмент"'},
        {id: 9, name: 'Кирпич красный', category: 'Кирпичи и блоки', unit: 'шт', country: 'КР', price: 12, supplier: 'ООО "КирпичЗавод"'},
        {id: 10, name: 'Блок газобетонный', category: 'Кирпичи и блоки', unit: 'шт', country: 'РФ', price: 85, supplier: 'ООО "БлокСтрой"'},
        {id: 11, name: 'Цемент М400', category: 'Смеси', unit: 'мешок', country: 'КР', price: 450, supplier: 'ООО "ЦементПро"'},
        {id: 12, name: 'Песок речной', category: 'Смеси', unit: 'м³', country: 'КР', price: 800, supplier: 'ИП "ПесокСтрой"'},
        {id: 13, name: 'Щебень гранитный', category: 'Смеси', unit: 'м³', country: 'КР', price: 1200, supplier: 'ООО "ЩебеньПро"'},
        {id: 14, name: 'Краска акриловая', category: 'Отделочные материалы', unit: 'кг', country: 'РФ', price: 350, supplier: 'ТД "КраскиПро"'},
        {id: 15, name: 'Штукатурка гипсовая', category: 'Отделочные материалы', unit: 'кг', country: 'РФ', price: 180, supplier: 'ТД "КраскиПро"'},
        {id: 16, name: 'Арматура A20', category: 'Арматура', unit: 'м', country: 'РФ', price: 200, supplier: 'ООО "СтройМатериалы"'},
        {id: 17, name: 'Арматура A25', category: 'Арматура', unit: 'м', country: 'Китай', price: 280, supplier: 'ТД "МеталлСтрой"'},
        {id: 18, name: 'Шуруповерт', category: 'Инструменты', unit: 'шт', country: 'КР', price: 4200, supplier: 'ТД "Электроинструмент"'},
        {id: 19, name: 'Кирпич белый', category: 'Кирпичи и блоки', unit: 'шт', country: 'КР', price: 15, supplier: 'ООО "КирпичЗавод"'},
        {id: 20, name: 'Блок керамзитовый', category: 'Кирпичи и блоки', unit: 'шт', country: 'РФ', price: 95, supplier: 'ООО "БлокСтрой"'},
        {id: 21, name: 'Цемент М500', category: 'Смеси', unit: 'мешок', country: 'КР', price: 520, supplier: 'ООО "ЦементПро"'},
        {id: 22, name: 'Песок карьерный', category: 'Смеси', unit: 'м³', country: 'КР', price: 750, supplier: 'ИП "ПесокСтрой"'},
        {id: 23, name: 'Щебень известняковый', category: 'Смеси', unit: 'м³', country: 'КР', price: 1100, supplier: 'ООО "ЩебеньПро"'},
        {id: 24, name: 'Краска масляная', category: 'Отделочные материалы', unit: 'кг', country: 'РФ', price: 280, supplier: 'ТД "КраскиПро"'},
        {id: 25, name: 'Шпаклевка финишная', category: 'Отделочные материалы', unit: 'кг', country: 'РФ', price: 220, supplier: 'ТД "КраскиПро"'},
    ],
    
    suppliers: [
        {id: 1, name: 'ООО "СтройМатериалы"', email: 'info@stroymat.kg', phone: '+996 555 123456', products: 5, rating: 4.8},
        {id: 2, name: 'ТД "МеталлСтрой"', email: 'sales@metall.kg', phone: '+996 555 234567', products: 8, rating: 4.6},
        {id: 3, name: 'ИП "КиргизСтрой"', email: 'kirgiz@stroy.kg', phone: '+996 555 345678', products: 12, rating: 4.9},
        {id: 4, name: 'ООО "ИнструментПро"', email: 'tools@instr.kg', phone: '+996 555 456789', products: 15, rating: 4.7},
        {id: 5, name: 'ТД "Электроинструмент"', email: 'electro@tools.kg', phone: '+996 555 567890', products: 10, rating: 4.5},
        {id: 6, name: 'ООО "КирпичЗавод"', email: 'kirpich@zavod.kg', phone: '+996 555 678901', products: 7, rating: 4.8},
        {id: 7, name: 'ООО "БлокСтрой"', email: 'block@stroy.kg', phone: '+996 555 789012', products: 9, rating: 4.6},
        {id: 8, name: 'ООО "ЦементПро"', email: 'cement@pro.kg', phone: '+996 555 890123', products: 6, rating: 4.9},
        {id: 9, name: 'ИП "ПесокСтрой"', email: 'pesok@stroy.kg', phone: '+996 555 901234', products: 4, rating: 4.4},
        {id: 10, name: 'ООО "ЩебеньПро"', email: 'scheben@pro.kg', phone: '+996 555 012345', products: 5, rating: 4.7},
        {id: 11, name: 'ТД "КраскиПро"', email: 'kraski@pro.kg', phone: '+996 555 123789', products: 11, rating: 4.8},
    ],
    
    orders: [
        {id: 453, title: 'бетонные смеси', status: 'В обработке', date: '2025-01-15', items: 8, total: 12500},
        {id: 452, title: 'отделочные материалы', status: 'Отправлена поставщикам', date: '2025-01-14', items: 12, total: 8900},
        {id: 451, title: 'арматура и проволока', status: 'Выполнена', date: '2025-01-12', items: 5, total: 2100},
        {id: 450, title: 'инструменты', status: 'В обработке', date: '2025-01-10', items: 3, total: 17200},
        {id: 449, title: 'кирпичи и блоки', status: 'Отменена', date: '2025-01-08', items: 15, total: 4500},
    ]
};

// Улучшенный поиск с поддержкой фильтров
class SearchEngine {
    constructor(data) {
        this.data = data;
        this.lastQuery = '';
    }
    
    search(query, filters = {}) {
        this.lastQuery = query.toLowerCase().trim();
        
        if (!this.lastQuery && Object.keys(filters).length === 0) {
            return this.data.products;
        }
        
        let results = this.data.products.filter(product => {
            // Поиск по названию
            const nameMatch = !this.lastQuery || 
                product.name.toLowerCase().includes(this.lastQuery) ||
                product.name.toLowerCase().split(' ').some(word => word.startsWith(this.lastQuery));
            
            // Поиск по категории
            const categoryMatch = !this.lastQuery || 
                product.category.toLowerCase().includes(this.lastQuery);
            
            // Поиск по поставщику
            const supplierMatch = !this.lastQuery || 
                product.supplier.toLowerCase().includes(this.lastQuery);
            
            // Фильтры
            const categoryFilter = !filters.category || product.category === filters.category;
            const countryFilter = !filters.country || product.country === filters.country;
            const priceFilter = (!filters.minPrice || product.price >= filters.minPrice) &&
                               (!filters.maxPrice || product.price <= filters.maxPrice);
            
            return (nameMatch || categoryMatch || supplierMatch) && 
                   categoryFilter && countryFilter && priceFilter;
        });
        
        // Сортировка по релевантности
        if (this.lastQuery) {
            results = results.sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                const aStarts = aName.startsWith(this.lastQuery) ? 1 : 0;
                const bStarts = bName.startsWith(this.lastQuery) ? 1 : 0;
                if (aStarts !== bStarts) return bStarts - aStarts;
                return aName.indexOf(this.lastQuery) - bName.indexOf(this.lastQuery);
            });
        }
        
        return results;
    }
    
    searchSuppliers(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return this.data.suppliers;
        
        return this.data.suppliers.filter(supplier => 
            supplier.name.toLowerCase().includes(searchTerm) ||
            supplier.email.toLowerCase().includes(searchTerm)
        );
    }
    
    searchOrders(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return this.data.orders;
        
        return this.data.orders.filter(order => 
            order.title.toLowerCase().includes(searchTerm) ||
            order.id.toString().includes(searchTerm) ||
            order.status.toLowerCase().includes(searchTerm)
        );
    }
}

// Инициализация поисковика
const searchEngine = new SearchEngine(AppData);

// Управление корзиной
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    add(product, quantity = 1) {
        const existing = this.cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                unit: product.unit,
                quantity: quantity,
                supplier: product.supplier
            });
        }
        this.save();
        return this.cart;
    }
    
    remove(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.save();
        return this.cart;
    }
    
    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (quantity <= 0) {
                return this.remove(productId);
            }
            this.save();
        }
        return this.cart;
    }
    
    clear() {
        this.cart = [];
        this.save();
        return this.cart;
    }
    
    getTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    getCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.onChange();
    }
    
    onChange() {
        // Событие для обновления UI
        if (typeof window.updateCartUI === 'function') {
            window.updateCartUI();
        }
    }
}

const cartManager = new CartManager();

// Утилиты
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#2F6FED' : type === 'error' ? '#ef4444' : '#f59e0b';
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; 
        background: ${bgColor}; color: white; 
        padding: 16px 24px; border-radius: 12px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.2); 
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' сом';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Экспорт данных
function exportDataToCSV(data, filename) {
    if (!data || data.length === 0) {
        showNotification('Нет данных для экспорта', 'error');
        return;
    }
    
    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(','),
        ...data.map(row => headers.map(header => {
            const value = row[header];
            return typeof value === 'string' ? `"${value}"` : value;
        }).join(','))
    ].join('\n');
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename || 'export.csv';
    link.click();
    showNotification('Файл экспортирован');
}

// Инициализация страницы
function initPage() {
    // Обновление активной ссылки навигации
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Обновление статистики
    if (typeof window.updateStats === 'function') {
        window.updateStats();
    }
}

// Добавляем стили для анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

