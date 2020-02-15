export interface HasId {
  id: string
}

export interface NormalizedObjects<T extends HasId> {
  byId: { [id: string]: T }
  allIds: string[]
}

export interface FetchableNormalizeObject<T extends HasId>
  extends NormalizedObjects<T> {
  isFetching: boolean
}
