export interface Trip {
  id: number,
  name: string,
  location: string,
  startDate: string,
  endDate: string,
  points: {latitude: string, longitude: string, name: string, date: string}[]
}
