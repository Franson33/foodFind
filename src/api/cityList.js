const cityList = [
  { count: 'ARGENTINA',
    cities: ['Buenos Aires'],
    id: 'yUgOtqFNEh'
  },
  { count: 'AUSTRALIA',
    cities: ['Adelaide', 'Brisbane', 'Melbourne', 'Perth', 'Sydney'],
    id: 'lfZDqVUJXt'
  },
  { count: 'AUSTRIA',
    cities: ['Wien'],
    id: 'PUbANnwEiC'
  },
  { count: 'BELGIUM',
    cities: ['Antwerpen', 'Bruxelles'],
    id: 'QNfMdabpdV'
  },
  { count: 'BRAZIL',
    cities: ['Rio de Janeiro', 'São Paulo'],
    id: 'hbdTneFiTq'
  },
  { count: 'CANADA',
    cities: ['Calgary', 'Edmonton', 'Halifax', 'Montréal', 'Ottawa', 'Toronto', 'Vancouver'],
    id: 'mflRDPWtTB'
  },
  { count: 'CHILE',
    cities: ['Santiago'],
    id: 'pbtBdeWkVa'
  },
  { count: 'CZECH REPUBLIC',
    cities: ['Praha'],
    id: 'CiiPlNMMeV'
  },
  { count: 'DENMARK',
    cities: ['København'],
    id: 'cOSyYviFHD'
  },
  { count: 'FINLAND',
    cities: ['Helsinki'],
    id: 'NlfvFPwjmQ'
  },
  { count: 'FRANCE',
    cities: ['Lyon', 'Marseille', 'Paris'],
    id: 'UQLgcWbfvz'
  },
  { count: 'GERMANY',
    cities: ['Berlin', 'Frankfurt am Main', 'Hamburg', 'Köln', 'München'],
    id: 'PZhqVfZoWU'
  },
  { count: 'HONGKONG',
    cities: ['香港'],
    id: 'vBqalgaPRc'
  },
  { count: 'ITALY',
    cities: ['Milano', 'Roma'],
    id: 'AaJavosbAa'
  },
  { count: 'JAPAN',
    cities: ['大阪市', '東京'],
    id: 'yEhtaUjDbw'
  },
  { count: 'MALAYSIA',
    cities: ['Kuala Lumpur'],
    id: 'fqEZKDrhEI'
  },
  { count: 'MEXICO',
    cities: ['México, D.F.'],
    id: 'QbfoKdzyPv'
  },
  { count: 'NEW ZEALAND',
    cities: ['Auckland'],
    id: 'BjblhlWlVj'
  },
  { count: 'NORWAY',
    cities: ['Oslo'],
    id: 'FfURYLHbrD'
  },
  { count: 'PHILIPPINES',
    cities: ['Manila'],
    id: 'CokFfeUEVs'
  },
  { count: 'POLAND',
    cities: ['Kraków', 'Warszawa'],
    id: 'dpVYDVHPsW'
  },
  { count: 'PORTUGAL',
    cities: ['Lisboa'],
    id: 'uEGpdFjLcg'
  },
  { count: 'REPUBLIC OF IRELAND',
    cities: ['Dublin'],
    id: 'ZdoJQedwjq'
  },
  { count: 'SINGAPORE',
    cities: ['Singapore'],
    id: 'VBwzxswIzN'
  },
  { count: 'SPAIN',
    cities: ['Barcelona', 'Madrid'],
    id: 'owvAMwIsJN'
  },
  { count: 'SWEDEN',
    cities: ['Stockholm'],
    id: 'cljEgWZUdp'
  },
  { count: 'SWITZERLAND',
    cities: ['Zürich'],
    id: 'QUKGjQyOiw'
  },
  { count: 'TAIWAN',
    cities: ['台北市'],
    id: 'wYAuYUrRqd'
  },
  { count: 'THENETHERLANDS',
    cities: ['Amsterdam'],
    id: 'WaaPYacunZ'
  },
  { count: 'TURKEY',
    cities: ['İstanbul'],
    id: 'UMWThFyxdy'
  },
  { count: 'UNITEDKINGDOM',
    cities: ['Belfast', 'Brighton', 'Bristol', 'Cardiff', 'Edinburgh', 'Glasgow', 'Leeds', 'Liverpool', 'London', 'Manchester'],
    id: 'DXaZUgZyhU'
  },
  { count: 'USA',
    cities: ['Phoenix', 'Scottsdale', 'Tempe', 'Tucson', 'Alameda', 'Albany', 'Alhambra', 'Anaheim', 'Belmont', 'Berkeley', 'Beverly Hills',
      'Big Sur', 'Burbank', 'Concord', 'Costa Mesa', 'Culver City', 'Cupertino', 'Daly City', 'Davis', 'Dublin', 'Emeryville', 'Foster City',
      'Fremont', 'Glendale', 'Hayward', 'Healdsburg', 'Huntington Beach', 'Irvine', 'La Jolla', 'Livermore', 'Long Beach', 'Los Altos',
      'Los Angeles', 'Los Gatos', 'Marina del Rey', 'Menlo Park', 'Mill Valley', 'Millbrae', 'Milpitas', 'Monterey', 'Mountain View', 'Napa',
      'Newark', 'Newport Beach', 'Oakland', 'Orange County', 'Palo Alto', 'Park La Brea', 'Pasadena', 'Pleasanton', 'Redondo Beach', 'Redwood City',
      'Sacramento', 'San Bruno', 'San Carlos', 'San Diego', 'San Francisco', 'San Jose', 'San Leandro', 'San Mateo', 'San Rafael', 'Santa Barbara',
      'Santa Clara', 'Santa Cruz', 'Santa Monica', 'Santa Rosa', 'Sausalito', 'Sonoma', 'South Lake Tahoe', 'Stockton', 'Studio City', 'Sunnyvale',
      'Torrance', 'Union City', 'Venice', 'Walnut Creek', 'West Hollywood', 'West Los Angeles', 'Westwood', 'Yountville', 'Boulder', 'Denver', 'Hartford',
      'New Haven', 'Washington', 'Fort Lauderdale', 'Gainesville', 'Miami', 'Miami Beach', 'Orlando', 'Tampa', 'Atlanta', 'Savannah', 'Honolulu', 'Lahaina',
      'Iowa City', 'Boise', 'Chicago', 'Evanston', 'Naperville', 'Schaumburg', 'Skokie', 'Bloomington', 'Indianapolis', 'Louisville', 'New Orleans', 'Allston',
      'Boston', 'Brighton', 'Brookline', 'Cambridge', 'Somerville', 'Baltimore', 'Ann Arbor', 'Detroit', 'Minneapolis', 'Saint Paul', 'Kansas City', 'Saint Louis',
      'Charlotte', 'Durham', 'Raleigh', 'Newark', 'Princeton', 'Albuquerque', 'Santa Fe', 'Las Vegas', 'Reno', 'Brooklyn', 'Long Island City', 'New York',
      'Flushing', 'Cincinnati', 'Cleveland', 'Columbus', 'Portland', 'Salem', 'Philadelphia', 'Pittsburgh', 'Providence', 'Charleston', 'Memphis', 'Nashville',
      'Austin', 'Dallas', 'Houston', 'San Antonio', 'Salt Lake City', 'Alexandria', 'Arlington', 'Richmond', 'Burlington', 'Bellevue', 'Redmond', 'Seattle',
      'Madison', 'Milwaukee'],
    id: 'AjzQjyiZCF'
  }
]

export default cityList