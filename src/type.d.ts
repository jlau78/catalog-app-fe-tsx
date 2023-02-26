
interface IItem {
    itemId: string
    name: string
    description: string
    fullDescription: string
    price: string
    areaCodes?: string[]
    featureList: FeaturesList
    thumbnails?: string[]

    // optional fields as denoted by ?
    createdAt?: string
    updatedAt?: string

}

interface Attribute {
    key: string,
    value: string
}

interface FeaturesList {
  Available: string;
  "Minimum term": string;
  "Maximum Term": string;
  Deposit: string;
  "Bills Included?": string;
  Furnishings: string;
  Parking: string;
  Garage: string;
  GardenTerrace: string;
  BalconyPatio: string;
  DisabledAccess: string;
  LivingRoom: string;
  BroadbandIncluded: string;
  "#flatmates": string;
  "Total # Rooms": string;
  Ages: string;
  Smoker: string;
  AnyPets: string;
  Language: string;
  Occupation: string;
  Gender: string;
  CouplesOk: string;
  SmokingOk: string;
  PetsOk: string;
  References: string;
  MinAge: string;
  MaxAge: string;
}

interface IFeature {
  Available: string;
  'Minimum term': string,
  'Maximum term': string,
  'Security deposit': string
  Furnishings: string
  References: string
}

interface ItemProps {
    item: IItem
}

interface ApiDataType {
    message: string
    status: string
    items: IItem[]
    item: IItem
}