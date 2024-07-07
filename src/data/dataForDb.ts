export const airBusesArray = [
    {"name": "Boeing 747"},
    {"name": "Airbus A320"},
    {"name": "Cessna 172"},
    {"name": "Lockheed Martin F-22 Raptor"},
    {"name": "Sukhoi Su-35"},
    {"name": "Boeing 787 Dreamliner"},
    {"name": "Airbus A350 XWB"},
    {"name": "Mikoyan MiG-29"},
    {"name": "Antonov An-225 Mriya"},
    {"name": "Bombardier Global 7500"},
    {"name": "Dassault Falcon 8X"},
    {"name": "Gulfstream G700"},
    {"name": "Lockheed C-130 Hercules"},
    {"name": "Northrop Grumman B-2 Spirit"},
    {"name": "Airbus A380"},
    {"name": "Embraer E-Jet E2"},
    {"name": "Beechcraft King Air 350"},
    {"name": "Bell Boeing V-22 Osprey"},
    {"name": "Pilatus PC-12"},
    {"name": "Cirrus Vision SF50"}
]


export const citiesArray = [
    {"name": "Москва"},
    {"name": "Санкт-Петербург"},
    {"name": "Новосибирск"},
    {"name": "Екатеринбург"},
    {"name": "Казань"},
    {"name": "Нижний Новгород"},
    {"name": "Челябинск"},
    {"name": "Самара"},
    {"name": "Ростов-на-Дону"},
    {"name": "Уфа"},
    {"name": "Красноярск"},
    {"name": "Пермь"},
    {"name": "Воронеж"},
    {"name": "Волгоград"},
    {"name": "Краснодар"},
    {"name": "Саратов"},
    {"name": "Тюмень"},
    {"name": "Ижевск"},
    {"name": "Барнаул"},
    {"name": "Ульяновск"}
]

export const companyArray = [
    {"name": "SkyLine Airways"},
    {"name": "AeroSpace Transport"},
    {"name": "Global Aviators"},
    {"name": "Eagle Wings Airlines"},
    {"name": "Titanium Jets"},
    {"name": "Voyage Air"},
    {"name": "Majestic Skies"},
    {"name": "JetStream Aviation"},
    {"name": "Pioneer Air Services"},
    {"name": "Falcon Aero"},
    {"name": "Infinity Air"},
    {"name": "StarFlight Charter"},
    {"name": "Elite Skyways"},
    {"name": "Vanguard Airlines"},
    {"name": "Nimbus Aviation"},
    {"name": "AeroDream Travels"},
    {"name": "Velocity Air"},
    {"name": "Zenith Flyers"},
    {"name": "Skybound Charter"},
    {"name": "NovaJet Airlines"}
]

export const seatClassArray = [
    {
    "name":"эконом класс",
    "multiplier":1
    },
    {
        "name":"премиум класс",
        "multiplier":2
    },
    {
        "name":"бизнес класс",
        "multiplier":3
    },

    {
        "name":"первый класс",
        "multiplier":4
    },
]

export const tripArray = [
  {
      "price": 23000,
      "seats": 2,
      "seatClass": {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "SkyLine Airways",
          "uid": "83e069d4-9039-4bde-aaf4-ceb95af1b647"
      },
      "airBus": {
          "name": "Boeing 747",
          "uid": "0f1ca660-80f5-43cb-bc42-a699ebcba3fd"
      },
      "departure_city": {
          "name": "Москва",
          "uid": "3102af90-5338-45c0-a9f7-3a654cc2e840"
      },
      "arrival_city": {
          "name": "Санкт-Петербург",
          "uid": "27863c6a-9153-41e9-912f-612a6bf97e58"
      }
  },
  {
      "price": 12500,
      "seats": 1,
      "seatClass": {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "SkyLine Airways",
          "uid": "83e069d4-9039-4bde-aaf4-ceb95af1b647"
      },
      "airBus": {
          "name": "Airbus A320",
          "uid": "b5857c93-f56a-4bad-a169-ed95a2366035"
      },
      "departure_city": {
          "name": "Москва",
          "uid": "3102af90-5338-45c0-a9f7-3a654cc2e840"
      },
      "arrival_city": {
          "name": "Санкт-Петербург",
          "uid": "27863c6a-9153-41e9-912f-612a6bf97e58"
      }
  },
  {
      "price": 7500,
      "seats": 3,
      "seatClass": {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "SkyLine Airways",
          "uid": "83e069d4-9039-4bde-aaf4-ceb95af1b647"
      },
      "airBus": {
          "name": "Cessna 172",
          "uid": "03304cf8-c643-46ba-92fe-67737fbcbdf8"
      },
      "departure_city": {
          "name": "Москва",
          "uid": "3102af90-5338-45c0-a9f7-3a654cc2e840"
      },
      "arrival_city": {
          "name": "Санкт-Петербург",
          "uid": "27863c6a-9153-41e9-912f-612a6bf97e58"
      }
  },
  {
      "price": 18500,
      "seats": 4,
      "seatClass": {
          "name": "премиум класс",
          "multiplier": 2,
          "uid": "7e650cc6-4460-456b-a76a-5a12e49ea3aa"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "AeroSpace Transport",
          "uid": "da59c2a8-f6e5-454e-9f55-ba6c4b8e3131"
      },
      "airBus": {
          "name": "Lockheed Martin F-22 Raptor",
          "uid": "d76be4c5-ce10-4323-b877-3a080d54913b"
      },
      "departure_city": {
          "name": "Новосибирск",
          "uid": "397a3c34-d40f-45f9-9d7f-665682e52bb3"
      },
      "arrival_city": {
          "name": "Екатеринбург",
          "uid": "666bb482-a53c-4783-827d-cd2d7de46230"
      }
  },
  {
      "price": 34000,
      "seats": 1,
      "seatClass": {
          "name": "бизнес класс",
          "multiplier": 3,
          "uid": "4000bda5-7207-4902-a8bc-3f45938775be"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Global Aviators",
          "uid": "97213042-3838-4d43-8435-f34bb51be307"
      },
      "airBus": {
          "name": "Sukhoi Su-35",
          "uid": "61a2d14c-1e70-4fab-943a-9d09606f3f55"
      },
      "departure_city": {
          "name": "Казань",
          "uid": "8fb0146d-bca8-437e-9290-fa9fffa49f30"
      },
      "arrival_city": {
          "name": "Нижний Новгород",
          "uid": "5b550e0a-5584-4e7f-bb44-7e7e136bf4d9"
      }
  },
  {
      "price": 50000,
      "seats": 2,
      "seatClass": {
          "name": "первый класс",
          "multiplier": 4,
          "uid": "8e4a0fd2-8e00-4a61-96ec-110ef6e7890b"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Eagle Wings Airlines",
          "uid": "e3b0f7f0-a86b-461f-819c-1bede1b49ddf"
      },
      "airBus": {
          "name": "Boeing 787 Dreamliner",
          "uid": "dfcc37dd-cd93-4957-b8e8-ab653a01411f"
      },
      "departure_city": {
          "name": "Челябинск",
          "uid": "5535ec08-8e5b-4ed8-a92c-f9351312f40c"
      },
      "arrival_city": {
          "name": "Самара",
          "uid": "dc4585a4-f99d-4210-b7da-a6b923fc33d6"
      }
  },
  {
      "price": 27000,
      "seats": 3,
      "seatClass": {
          "name": "бизнес класс",
          "multiplier": 3,
          "uid": "4000bda5-7207-4902-a8bc-3f45938775be"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Titanium Jets",
          "uid": "6e712814-31ca-4699-a46b-7ec8bf4740ff"
      },
      "airBus": {
          "name": "Airbus A350 XWB",
          "uid": "816a4a5e-c440-40da-9fe1-1706f7203988"
      },
      "departure_city": {
          "name": "Ростов-на-Дону",
          "uid": "f8863dfd-e11a-468c-9825-69b59623f023"
      },
      "arrival_city": {
          "name": "Уфа",
          "uid": "f182e6fb-76c8-4dde-80b3-36512af86cb5"
      }
  },
  {
      "price": 22000,
      "seats": 4,
      "seatClass": {
          "name": "премиум класс",
          "multiplier": 2,
          "uid": "7e650cc6-4460-456b-a76a-5a12e49ea3aa"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Voyage Air",
          "uid": "82855fee-9d44-40b9-8de6-21f8993cf09a"
      },
      "airBus": {
          "name": "Mikoyan MiG-29",
          "uid": "255c458f-e2d2-440c-9083-27f00513d87e"
      },
      "departure_city": {
          "name": "Красноярск",
          "uid": "9725ca61-655f-48c2-bab9-7615a2817df6"
      },
      "arrival_city": {
          "name": "Пермь",
          "uid": "7de70e7f-51e5-4b9d-9340-49757d02521a"
      }
  },
  {
      "price": 19000,
      "seats": 2,
      "seatClass": {
          "name": "премиум класс",
          "multiplier": 2,
          "uid": "7e650cc6-4460-456b-a76a-5a12e49ea3aa"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Majestic Skies",
          "uid": "c3f50e7c-b63d-40c6-8462-8fa4e9ed1d09"
      },
      "airBus": {
          "name": "Antonov An-225 Mriya",
          "uid": "19440f63-c16f-493d-8ab1-7248b42e31d3"
      },
      "departure_city": {
          "name": "Воронеж",
          "uid": "59a2b03f-07eb-4593-b52d-5f05a271931d"
      },
      "arrival_city": {
          "name": "Волгоград",
          "uid": "fa7d8efb-5c65-419f-93c4-008e1baff5aa"
      }
  },
  {
      "price": 41000,
      "seats": 1,
      "seatClass": {
          "name": "первый класс",
          "multiplier": 4,
          "uid": "8e4a0fd2-8e00-4a61-96ec-110ef6e7890b"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "JetStream Aviation",
          "uid": "bb8a5f2e-4723-4531-892a-c8c0b66327eb"
      },
      "airBus": {
          "name": "Bombardier Global 7500",
          "uid": "f5d9626e-de17-4184-b37c-a2d487af5388"
      },
      "departure_city": {
          "name": "Краснодар",
          "uid": "105f5237-733c-4d6e-b718-b78c1556a37d"
      },
      "arrival_city": {
          "name": "Саратов",
          "uid": "fcf204b7-9e86-43a7-9b00-04ce41e29b9d"
      }
  },
  {
      "price": 36000,
      "seats": 2,
      "seatClass": {
          "name": "бизнес класс",
          "multiplier": 3,
          "uid": "4000bda5-7207-4902-a8bc-3f45938775be"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Pioneer Air Services",
          "uid": "61fc5cc7-983c-4974-b4c8-468e8c71dda9"
      },
      "airBus": {
          "name": "Dassault Falcon 8X",
          "uid": "ad87a525-6b67-4da0-b20c-b5737523a5db"
      },
      "departure_city": {
          "name": "Тюмень",
          "uid": "8f83a0b7-4c63-4c23-998f-afbaab1607db"
      },
      "arrival_city": {
          "name": "Ижевск",
          "uid": "aa725374-5892-4050-a375-c7aedbde536a"
      }
  },
  {
      "price": 30000,
      "seats": 3,
      "seatClass": {
          "name": "премиум класс",
          "multiplier": 2,
          "uid": "7e650cc6-4460-456b-a76a-5a12e49ea3aa"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Falcon Aero",
          "uid": "79b8dd5e-a080-47d2-b71c-0cd7922315d5"
      },
      "airBus": {
          "name": "Gulfstream G700",
          "uid": "73823f4e-5a4f-47c3-ab5b-af6e5df443e6"
      },
      "departure_city": {
          "name": "Барнаул",
          "uid": "361a5159-7c51-4b35-8f21-1042266e646e"
      },
      "arrival_city": {
          "name": "Ульяновск",
          "uid": "683cc3a5-68ef-4dbc-af76-9f9044469806"
      }
  },
  {
      "price": 45000,
      "seats": 1,
      "seatClass": {
          "name": "первый класс",
          "multiplier": 4,
          "uid": "8e4a0fd2-8e00-4a61-96ec-110ef6e7890b"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Infinity Air",
          "uid": "28f6de90-981c-49fe-ab7a-474b0e689d5e"
      },
      "airBus": {
          "name": "Lockheed C-130 Hercules",
          "uid": "2f2fa329-712f-4ba5-8c0e-f8986be8a3fd"
      },
      "departure_city": {
          "name": "Москва",
          "uid": "3102af90-5338-45c0-a9f7-3a654cc2e840"
      },
      "arrival_city": {
          "name": "Санкт-Петербург",
          "uid": "27863c6a-9153-41e9-912f-612a6bf97e58"
      }
  },
  {
      "price": 38000,
      "seats": 2,
      "seatClass": {
          "name": "бизнес класс",
          "multiplier": 3,
          "uid": "4000bda5-7207-4902-a8bc-3f45938775be"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "StarFlight Charter",
          "uid": "460a7105-33cd-4468-a690-20abd311133f"
      },
      "airBus": {
          "name": "Northrop Grumman B-2 Spirit",
          "uid": "60950f0c-1c6c-4373-854e-a9ec450e820a"
      },
      "departure_city": {
          "name": "Екатеринбург",
          "uid": "666bb482-a53c-4783-827d-cd2d7de46230"
      },
      "arrival_city": {
          "name": "Новосибирск",
          "uid": "397a3c34-d40f-45f9-9d7f-665682e52bb3"
      }
  },
  {
      "price": 21000,
      "seats": 1,
      "seatClass": {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Elite Skyways",
          "uid": "336a34a9-7168-4582-b315-91cb931c258d"
      },
      "airBus": {
          "name": "Airbus A320",
          "uid": "b5857c93-f56a-4bad-a169-ed95a2366035"
      },
      "departure_city": {
          "name": "Челябинск",
          "uid": "5535ec08-8e5b-4ed8-a92c-f9351312f40c"
      },
      "arrival_city": {
          "name": "Самара",
          "uid": "dc4585a4-f99d-4210-b7da-a6b923fc33d6"
      }
  },
  {
      "price": 31000,
      "seats": 3,
      "seatClass": {
          "name": "премиум класс",
          "multiplier": 2,
          "uid": "7e650cc6-4460-456b-a76a-5a12e49ea3aa"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Nimbus Aviation",
          "uid": "6aebc969-ac71-4b5e-961d-0b33bb87b7ba"
      },
      "airBus": {
          "name": "Airbus A350 XWB",
          "uid": "816a4a5e-c440-40da-9fe1-1706f7203988"
      },
      "departure_city": {
          "name": "Красноярск",
          "uid": "9725ca61-655f-48c2-bab9-7615a2817df6"
      },
      "arrival_city": {
          "name": "Пермь",
          "uid": "7de70e7f-51e5-4b9d-9340-49757d02521a"
      }
  },
  {
      "price": 25000,
      "seats": 2,
      "seatClass": {
          "name": "эконом класс",
          "multiplier": 1,
          "uid": "69cea099-b745-4fa8-921a-1e33d0948d79"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
          "name": "Vanguard Airlines",
          "uid": "ecfe93fb-3f3a-4db5-a0d5-13ee2857eb34"
      },
      "airBus": {
          "name": "Lockheed Martin F-22 Raptor",
          "uid": "d76be4c5-ce10-4323-b877-3a080d54913b"
      },
      "departure_city": {
          "name": "Москва",
          "uid": "3102af90-5338-45c0-a9f7-3a654cc2e840"
      },
      "arrival_city": {
          "name": "Санкт-Петербург",
          "uid": "27863c6a-9153-41e9-912f-612a6bf97e58"
      }
  }
]


// SELECT json_object_agg(
//     schema_name, schema_data
// ) 
// FROM (
//     SELECT 'airBus' AS schema_name, json_agg(row_to_json(t1)) AS schema_data
//     FROM (SELECT * FROM air_bus) t1

//     UNION ALL

//     SELECT 'City' AS schema_name, json_agg(row_to_json(t2)) AS schema_data
//     FROM (SELECT * FROM city) t2

// 	UNION ALL

// 	SELECT 'seatClass' AS schema_name, json_agg(row_to_json(t3)) AS schema_data
//     FROM (SELECT * FROM seat_class) t3

// 	UNION ALL

// 		SELECT 'company' AS schema_name, json_agg(row_to_json(t4)) AS schema_data
//     FROM (SELECT * FROM company) t4

// ) sub;




// сделай массив json из объектов типа этого
// {


//     price: number (от 2000 до 30000)

//     seats: (от 1 до 3)

//     seatClass: SeatClass

//     departure_time: в миллисекундах

//     arrival_time: в миллисекундах

//     company: Company

//     airBus: AirBus


//     departure_city: City

//     arrival_city: City

   

// }