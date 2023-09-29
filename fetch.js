/*fetch("https://jsonplaceholder.typicode.com/users") //GET İSTEĞİ GÖNDERİR.
.then((response)=>response.json()) //then içerisinde bize response olarak gelir,response parametre olaraka alır jsona çeviririz
.then(function(users){ //then() metodu içerisinde, önceki metottan gelen sonucu alıp foreach ile tek tek döndük
    users.forEach((user) =>{
        console.log(user.address.street)
    })
})
.catch((err) => console.log(err))*/

// !resim
fetch("https://jsonplaceholder.typicode.com/photos")
.then((response)=>response.json())
.then(function(photos){
    photos.forEach((photo)=>{
        let ekle = document.querySelector('.ekle')
        let img = document.createElement('img')
        img.src = photo.thumbnailUrl
        ekle.appendChild(img)
    })
})
.catch((err) => console.log(err))

/*
!Fetch tanımı
const api = 'https://jsonplaceholder.typicode.com/users'
fetch(api) //fetch siteye istek attı
    .then(response => response.json() ) //gelen bir response var bu response da jsona dönüştürür
    .then(users=>{console.log(users)} //önceki then metodundan gelen cevabı alıyor cevap artık dataya dönüştü ve consola yazdırdık
    )
    .catch(err => console.log(err)) //hata varsa eğer onu yakalayıp console yazdırdık
*/

// const api2 = 'https://doviz.dev/v1/usd.json'
// const api2 = 'https://apigw.vakifbank.com.tr:8443'
// const api3 = 'https://api.collectapi.com/economy/currencyToAll?int=10&base=USD'

// fetch(api2)
//     .then((response) => response.json())
//     .then(data => {
//         let ekle = document.querySelector('.ekle')
//         let span = document.createElement('span')
//         span.innerText = `dolar kuru ${data.USDTRY}`
//         ekle.appendChild(span)

//     })
// .catch(err => console.log(err))

// fetch(api2)
// .then((response) => response.json())
// .then(data =>{console.log(data.USDTRY)})