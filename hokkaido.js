var hokkaido_adatok = [
    {
        "varos" : "Sapporo",
        "lakossag"	: 1975065
    },
    {
        "varos" : "Asahikawa",
        "lakossag"	: 329513 
    },
    {
        "varos" : "Hakodate",
        "lakossag"	: 251271 
    },
    {
        "varos" : "Tomakomai",
        "lakossag"	: 170234 
    },
    {
        "varos" : "Obihiro",
        "lakossag"	: 166690 
    },
    {
        "varos" : "Kushiro",
        "lakossag"	: 165230 
    },
    {
        "varos" : "Ebetsu",
        "lakossag"	: 121145 
    },
    {
        "varos" : "Kitami",
        "lakossag"	: 115608 
    },
    {
        "varos" : "Otaru",
        "lakossag"	: 111422 
    },
    {
        "varos" : "Chitose",
        "lakossag"	: 98019 
    }
]

var felsorolas = ""
for (const elem of hokkaido_adatok) {
    //console.log(elem.varos)
    felsorolas+=
    `
    <tr>
    <td>
    ${elem.varos} 
    </td>
    <td>
    ${elem.lakossag}
    </td>
    </tr>
    `
}
document.getElementById("tablazat").innerHTML+=felsorolas


var hokkaido_nemzeti =  [
      {
        "name": "Shiretoko",
        "picture_url": "https://www.tripsavvy.com/thmb/CvzcRLFlXqoSUFePbxZMxI4lK7M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shiretokolake-5f9d7b689c2b48cb9ea2357cb4ab1400.jpg"
      },
      {
        "name": "Shikotsu-Toya",
        "picture_url": "https://www.tripsavvy.com/thmb/WL2fCxnKoq26OJHdpvGtZ1UCHro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/narionalparkhokkaido-a86babedf0ca4cb08e7828fdeb2576fe.jpg"
      },
      {
        "name": "Akan",
        "picture_url": "https://www.tripsavvy.com/thmb/U3meLL4xYZ_QLEZST2JJsOs8RVA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/akannationalpark-0b0867715e104bbfb87937ca3351efc0.jpg"
      },
      {
        "name": "Kushiro Shitsugen",
        "picture_url": "https://www.tripsavvy.com/thmb/C-SrQPCs02eILpMYjPwJr4EANdA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kushiroshitsugen-58330b936b964a65b1aa5cb92cf1b60b.jpg"
      },
      {
        "name": "Rishiri-Rebun-Sarobetsu",
        "picture_url": "https://www.tripsavvy.com/thmb/MFbELw16xHkqJ-B98ascCEjAm_U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rebunisland-dd11a7671f0e40d29802d5c402942ca3.jpg"
      },
      {
        "name": "Daisetsuzan",
        "picture_url": "https://www.tripsavvy.com/thmb/Yf2ZJBPXCIa3zVU1zA7WVSZWy_c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/daisetsuzan-52a7b996ebf34014871d74b23f37a3ce.jpg"
      },
      {
        "name": "Hidaka-sanmyaku Erimo",
        "picture_url": "https://www.tripsavvy.com/thmb/MFJAyOkJzcMC080FM4cSYZVyEBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hokkaidonationalparkcoastline-faa5ef6c507443e196fd1081f74782af.jpg"
      }
    ]
  
    var felsorolas_2 = ""
for (const elem of hokkaido_nemzeti) {
    //console.log(elem.varos)
    felsorolas_2+=
    `
    <tr>
    <td>
    ${elem.name} 
    </td>
    <td>
    <img src="${elem.picture_url}" alt="" class="nemzetipark_kepek_hokkaido">
    
    </td>
    </tr>
    `
}
document.getElementById("nemzeti_hokkaido").innerHTML+=felsorolas_2

        
        
        
        
        
        
        