const cityList = [
  { title: 'ARGENTINA',
    data: ['Buenos Aires'],
    id: 'yUgOtqFNEh'
  },
  { title: 'AUSTRALIA',
    data: ['Adelaide', 'Brisbane', 'Melbourne', 'Perth', 'Sydney'],
    id: 'lfZDqVUJXt'
  },
  { title: 'AUSTRIA',
    data: ['Wien'],
    id: 'PUbANnwEiC'
  },
  { title: 'BELGIUM',
    data: ['Antwerpen', 'Bruxelles'],
    id: 'QNfMdabpdV'
  },
  { title: 'BRAZIL',
    data: ['Rio de Janeiro', 'São Paulo'],
    id: 'hbdTneFiTq'
  },
  { title: 'CANADA',
    data: ['Calgary', 'Edmonton', 'Halifax', 'Montréal', 'Ottawa', 'Toronto', 'Vancouver'],
    id: 'mflRDPWtTB'
  },
  { title: 'CHILE',
    data: ['Santiago'],
    id: 'pbtBdeWkVa'
  },
  { title: 'CZECH REPUBLIC',
    data: ['Praha'],
    id: 'CiiPlNMMeV'
  },
  { title: 'DENMARK',
    data: ['København'],
    id: 'cOSyYviFHD'
  },
  { title: 'FINLAND',
    data: ['Helsinki'],
    id: 'NlfvFPwjmQ'
  },
  { title: 'FRANCE',
    data: ['Lyon', 'Marseille', 'Paris'],
    id: 'UQLgcWbfvz'
  },
  { title: 'GERMANY',
    data: ['Berlin', 'Frankfurt am Main', 'Hamburg', 'Köln', 'München'],
    id: 'PZhqVfZoWU'
  },
  { title: 'HONG-KONG',
    data: ['香港'],
    id: 'vBqalgaPRc'
  },
  { title: 'ITALY',
    data: ['Milano', 'Roma'],
    id: 'AaJavosbAa'
  },
  { title: 'JAPAN',
    data: ['大阪市', '東京'],
    id: 'yEhtaUjDbw'
  },
  { title: 'MALAYSIA',
    data: ['Kuala Lumpur'],
    id: 'fqEZKDrhEI'
  },
  { title: 'MEXICO',
    data: ['México, D.F.'],
    id: 'QbfoKdzyPv'
  },
  { title: 'NEW ZEALAND',
    data: ['Auckland'],
    id: 'BjblhlWlVj'
  },
  { title: 'NORWAY',
    data: ['Oslo'],
    id: 'FfURYLHbrD'
  },
  { title: 'PHILIPPINES',
    data: ['Manila'],
    id: 'CokFfeUEVs'
  },
  { title: 'POLAND',
    data: ['Kraków', 'Warszawa'],
    id: 'dpVYDVHPsW'
  },
  { title: 'PORTUGAL',
    data: ['Lisboa'],
    id: 'uEGpdFjLcg'
  },
  { title: 'REPUBLIC OF IRELAND',
    data: ['Dublin'],
    id: 'ZdoJQedwjq'
  },
  { title: 'SINGAPORE',
    data: ['Singapore'],
    id: 'VBwzxswIzN'
  },
  { title: 'SPAIN',
    data: ['Barcelona', 'Madrid'],
    id: 'owvAMwIsJN'
  },
  { title: 'SWEDEN',
    data: ['Stockholm'],
    id: 'cljEgWZUdp'
  },
  { title: 'SWITZERLAND',
    data: ['Zürich'],
    id: 'QUKGjQyOiw'
  },
  { title: 'TAIWAN',
    data: ['台北市'],
    id: 'wYAuYUrRqd'
  },
  { title: 'THE NETHERLANDS',
    data: ['Amsterdam'],
    id: 'WaaPYacunZ'
  },
  { title: 'TURKEY',
    data: ['İstanbul'],
    id: 'UMWThFyxdy'
  },
  { title: 'UNITED KINGDOM',
    data: ['Belfast', 'Brighton', 'Bristol', 'Cardiff', 'Edinburgh', 'Glasgow', 'Leeds', 'Liverpool', 'London', 'Manchester'],
    id: 'DXaZUgZyhU'
  },
  { title: 'USA',
    data: ['Alameda', 'Albany', 'Albuquerque', 'Alexandria', 'Alhambra', 'Allston', 'Anaheim', 'Ann Arbor', 'Arlington', 'Atlanta', 'Austin', 'Baltimore', 'Bellevue', 'Belmont', 'Berkeley', 'Beverly Hills', 'Big Sur', 'Bloomington', 'Boise', 'Boston', 'Boulder', 'Brighton', 'Brookline', 'Brooklyn', 'Burbank', 'Burlington', 'Cambridge', 'Charleston', 'Charlotte', 'Chicago', 'Cincinnati', 'Cleveland', 'Columbus', 'Concord', 'Costa Mesa', 'Culver City', 'Cupertino', 'Dallas', 'Daly City', 'Davis', 'Denver', 'Detroit', 'Dublin', 'Durham', 'Emeryville', 'Evanston', 'Flushing', 'Fort Lauderdale', 'Foster City', 'Fremont', 'Gainesville', 'Glendale', 'Hartford', 'Hayward', 'Healdsburg', 'Honolulu', 'Houston', 'Huntington Beach', 'Indianapolis', 'Iowa City', 'Irvine', 'Kansas City', 'La Jolla', 'Lahaina', 'Las Vegas', 'Livermore', 'Long Beach', 'Long Island City', 'Los Altos', 'Los Angeles', 'Los Gatos', 'Louisville', 'Madison', 'Marina del Rey', 'Memphis', 'Menlo Park', 'Miami', 'Miami Beach', 'Mill Valley', 'Millbrae', 'Milpitas', 'Milwaukee', 'Minneapolis', 'Monterey', 'Mountain View', 'Napa', 'Naperville', 'Nashville', 'New Haven', 'New Orleans', 'New York', 'Newark', 'Newport Beach', 'Oakland', 'Orange titley', 'Orlando', 'Palo Alto', 'Park La Brea', 'Pasadena', 'Philadelphia', 'Phoenix', 'Pittsburgh', 'Pleasanton', 'Portland', 'Princeton', 'Providence', 'Raleigh', 'Redmond', 'Redondo Beach', 'Redwood City', 'Reno', 'Richmond', 'Sacramento', 'Saint Louis', 'Saint Paul', 'Salem', 'Salt Lake City', 'San Antonio', 'San Bruno', 'San Carlos', 'San Diego', 'San Francisco', 'San Jose', 'San Leandro', 'San Mateo', 'San Rafael', 'Santa Barbara', 'Santa Clara', 'Santa Cruz', 'Santa Fe', 'Santa Monica', 'Santa Rosa', 'Sausalito', 'Savannah', 'Schaumburg', 'Scottsdale', 'Seattle', 'Skokie', 'Somerville', 'Sonoma', 'South Lake Tahoe', 'Stockton', 'Studio City', 'Sunnyvale', 'Tampa', 'Tempe', 'Torrance', 'Tucson', 'Union City', 'Venice', 'Walnut Creek', 'Washington', 'West Hollywood', 'West Los Angeles', 'Westwood', 'Yountville'],
    id: 'AjzQjyiZCF'
  }
]

export default cityList