document.addEventListener('DOMContentLoaded', () => {
    const heartCountSpan = document.getElementById('heart-count');
    const coinCountSpan = document.getElementById('coin-count');
    const copyCountBadge = document.getElementById('copy-count-badge');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const callHistoryList = document.getElementById('call-history-list');

    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    // Heart Icon functionality
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            heartCount++;
            heartCountSpan.textContent = heartCount;
        });
    });

    // Call Button functionality
    document.querySelectorAll('.call-button').forEach(button => {
        button.addEventListener('click', (event) => {
            if (coinCount < 20) {
                alert('Insufficient coins to make a call.');
                return;
            }

            const card = event.target.closest('.card');
            const serviceName = card.dataset.serviceName;
            const hotlineNumber = card.dataset.hotlineNumber;

            coinCount -= 20;
            coinCountSpan.textContent = coinCount;

            alert(`Calling ${serviceName} at ${hotlineNumber}.`);

            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

            const historyItem = document.createElement('div');
            historyItem.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-2', 'border-gray-200');
            historyItem.innerHTML = `
                <div>
                    <p class="font-bold">${serviceName}</p>
                    <p class="text-sm text-gray-500">${hotlineNumber}</p>
                </div>
                <span class="text-sm text-gray-500">${timeString}</span>
            `;
            callHistoryList.prepend(historyItem);
        });
    });

    // Copy Button functionality
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async (event) => {
            const card = event.target.closest('.card');
            const hotlineNumber = card.dataset.hotlineNumber;

            try {
                await navigator.clipboard.writeText(hotlineNumber);
                alert(`Number ${hotlineNumber} has been copied to your clipboard.`);
                copyCount++;
                copyCountBadge.textContent = `${copyCount} Copy`;
            } catch (err) {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy. Please try again.');
            }
        });
    });

    // Clear History Button functionality
    clearHistoryBtn.addEventListener('click', () => {
        callHistoryList.innerHTML = '';
    });
});