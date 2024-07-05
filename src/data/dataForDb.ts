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
        "uid": "00905ea7-fac1-49ce-b52a-7130cc9a8a38"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
        "name": "SkyLine Airways",
        "uid": "a650e781-03f4-4055-80d7-cd3a4c2857f8"
      },
      "airBus": {
        "name": "Boeing 747",
        "uid": "82f3f855-6b3f-4d03-b082-01043b793175"
      },
      "departure_city": {
        "name": "Москва",
        "uid": "c6619fae-51e7-4558-b982-e89a17a652d8"
      },
      "arrival_city": {
        "name": "Санкт-Петербург",
        "uid": "8fc790ad-6edc-4953-8668-412abe536b4a"
      }
    },
    {
      "price": 12500,
      "seats": 1,
      "seatClass": {
        "name": "эконом класс",
        "multiplier": 1,
        "uid": "00905ea7-fac1-49ce-b52a-7130cc9a8a38"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
        "name": "SkyLine Airways",
        "uid": "a650e781-03f4-4055-80d7-cd3a4c2857f8"
      },
      "airBus": {
        "name": "Airbus A320",
        "uid": "db857f5c-8573-44cb-8835-957708463435"
      },
      "departure_city": {
        "name": "Москва",
        "uid": "c6619fae-51e7-4558-b982-e89a17a652d8"
      },
      "arrival_city": {
        "name": "Санкт-Петербург",
        "uid": "8fc790ad-6edc-4953-8668-412abe536b4a"
      }
    },
    {
      "price": 7500,
      "seats": 3,
      "seatClass": {
        "name": "эконом класс",
        "multiplier": 1,
        "uid": "00905ea7-fac1-49ce-b52a-7130cc9a8a38"
      },
      "departure_time": 1648404951000,
      "arrival_time": 1648404951000,
      "company": {
        "name": "SkyLine Airways",
        "uid": "a650e781-03f4-4055-80d7-cd3a4c2857f8"
      },
      "airBus": {
        "name": "Cessna 172",
        "uid": "1388d358-6808-4a27-a7ef-255c700f1953"
      },
      "departure_city": {
        "name": "Москва",
        "uid": "c6619fae-51e7-4558-b982-e89a17a652d8"
      },
      "arrival_city": {
        "name": "Санкт-Петербург",
        "uid": "8fc790ad-6edc-4953-8668-412abe536b4a"
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