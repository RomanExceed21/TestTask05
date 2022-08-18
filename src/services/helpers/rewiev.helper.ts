import { IUpdatedObject } from '../../common/types';

export function returnIfUpdated<T>(dbResponse: IUpdatedObject<T>): T[] | boolean {
  return dbResponse[0] ? dbResponse[1] : !!dbResponse[0];
}
