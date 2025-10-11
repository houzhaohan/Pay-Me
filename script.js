// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 为支付卡片添加点击效果
    const paymentCards = document.querySelectorAll('.payment-card');
    
    paymentCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('card-clicked');
            
            // 移除其他卡片的点击效果
            paymentCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('card-clicked');
                }
            });
            
            // 添加短暂的高亮效果
            setTimeout(() => {
                this.classList.remove('card-clicked');
            }, 300);
        });
    });
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        if (event.key === '1' || event.key === '2') {
            const index = event.key === '1' ? 0 : 1;
            if (paymentCards[index]) {
                paymentCards[index].click();
            }
        }
    });
    
    // 显示页面加载完成后的动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});