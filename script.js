


window.productsData = {
    "transaction_id": "2307260001",
    "total_price": 1794,
    "currency": "CZK",
    "tax": 311.35,
    "shipping": 35,
    "shipping_tax": 6.07,
    "payment": 0,
    "payment_tax": 0,
    "items_price": 1453.72,
    "items_price_tax": 305.28,
    "items": [
        {
            "id": 200000022,
            "name": "Test produkt pro QR",
            "list_position": 0,
            "quantity": 1,
            "price": 1759,
            "categories": [
                "Kola a odrážedla"
            ]
        }
    ],
    "discounts": []
};

const {payment, total_price, transaction_id, currency} = window.productsData;
if(payment < 1) {
 const iURL = `https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=222885&bankCode=5500&amount=${total_price}&currency=${currency}&vs=${transaction_id}&message=Neplatit`;

const qrBlock = document.querySelector('#qr-block');

  
   const qrInfo = `<div id="qr-payment">
   <div id="qr-logo">
    <img src="https://240f2f6a52.clvaw-cdnwnd.com/16906c6b0462c63f159ec7c50a5f40e5/200000304-f3b47f3b48/Mavemi%20logo%20web%20hl.%20str%C3%A1nka.webp?ph=240f2f6a52">
  </div>
  <div id="qr-code"><h3>Objednávka č. ${transaction_id}</h3> <img id="qr-image" src="https://i.ibb.co/xgX0mhn/Whats-App-Image-2024-10-22-at-6-09-34-PM.jpg"><div><a href="${iURL}" download="${transaction_id}.webp" target="_blank">Stáhnout QR kód (do obrázku kliknete a zvolíte "Uložit jako" nebo "Stáhnout obrázek"</a></div></div>
  
 
  
  <div id="payment-info"><strong>
      <h3>Platební údaje:</h3>
    </strong>
    <div id="qr-amount">Částka: ${total_price} Kč</div>
    <div id="qr-vs">Variabilní symbol: ${transaction_id}</div>
    <div id="qr-account">Číslo účtu: 5646864/0300</div>
  </div>
<div id="qr-contact"><strong><h3> contact </h3></strong>
<div> Email: teachwebdev@gmail.com</div>
<div> Tel. phone +91 9712615370</div>

</div>

</div>`;
  qrBlock.insertAdjacentHTML('afterbegin', qrInfo); 
}

