const total=document.getElementById('total');

/* shipping 8gb memory */
const shipping8GbMemory=document.getElementById('shipping-8gb-memory');
const extra8GbMemoryCost=document.getElementById('extra-memory-cost');
shipping8GbMemory.addEventListener('click',function(){
    extra8GbMemoryCost.innerText='0';
    updateTotal()
});

/* extra 16gb memory cost */
const shipping16GbMemory=document.getElementById('shipping-16gb-memory');
const extra16GbMemoryCost=document.getElementById('extra-memory-cost');
shipping16GbMemory.addEventListener('click',function(){
    extra16GbMemoryCost.innerText='180';
    updateTotal()
});

/* extra 256gb storage cost */
const shipping256GbStorage=document.getElementById('shipping-256gb-storage');
const extra256GbStorageCost=document.getElementById('extra-storage-cost');
shipping256GbStorage.addEventListener('click',function(){
    extra256GbStorageCost.innerText='0';
    updateTotal()
});

/* extra 512gb storage cost*/
const shipping512GbStorage=document.getElementById('shipping-512gb-storage');
const extra512GbStorageCost=document.getElementById('extra-storage-cost');
shipping512GbStorage.addEventListener('click',function(){
    extra512GbStorageCost.innerText='100';
    updateTotal()
});

/* extra 1tb storage cost*/
const shipping1TbStorage=document.getElementById('shipping-1tb-storage');
const extra1TbStorageCost=document.getElementById('extra-storage-cost');
shipping1TbStorage.addEventListener('click',function(){
    extra1TbStorageCost.innerText='180';
    updateTotal()
});

/* delivery cost */
const freeShippingCost=document.getElementById('free-delivery');
const freeDeliveryCharge=document.getElementById('delivery-charge');
freeShippingCost.addEventListener('click',function(){
    freeDeliveryCharge.innerText='0';
    updateTotal()
})

/* delivery cost */
const regularDeliveryCost=document.getElementById('regular-delivery-cost');
const regularDeliveryCharge=document.getElementById('delivery-charge');
regularDeliveryCost.addEventListener('click',function(){
    regularDeliveryCharge.innerText='20';
    updateTotal()
})


function updateTotal(){
    const subTotal=document.getElementById('sub-total');
    const total=document.getElementById('total');
    const bestPrice=document.getElementById('best-price').innerText;
    const memoryCost=document.getElementById('extra-memory-cost').innerText;
    const storageCost=document.getElementById('extra-storage-cost').innerText;
    const deliveryCost=document.getElementById('delivery-charge').innerText;
    const subTotalValue=parseInt(bestPrice)+parseInt(memoryCost)+parseInt(storageCost)+parseInt(deliveryCost);
    subTotal.innerText=subTotalValue;
    total.innerText=subTotalValue;
}

document.getElementById('apply-code').addEventListener('click', function () {
    const totalCost = document.getElementById("sub-total")
    const grandTotal = document.getElementById('total')
    const promoInput = document.getElementById('coupon-code')
    const promoValue = promoInput.value
    const totalAmount = Number(totalCost.innerText)
    if (promoValue == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        grandTotal.innerText = totalAmount - discount;
    }
    promoInput.value = ''
})