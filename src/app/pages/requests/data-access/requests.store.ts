import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {finalize, of, tap} from 'rxjs';

export interface Request {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice?: number;
}

interface StoreState {
  requests: Request[];
  isLoading: boolean;
  firstLoad: boolean; // to not use backend
}

const initialState: StoreState = {
  requests: [],
  isLoading: false,
  firstLoad: false
}

const requestsTemplate = [
  {id: '12', name: '17323', quantity: 10, unitPrice: 100},
  {id: '12asdf', name: '17324', quantity: 2, unitPrice: 500},
  {id: '12sd2', name: '17325', quantity: 1, unitPrice: 750}
]

// should be service with APIs to db

export const RequestStore = signalStore(
  {providedIn: 'root'},
  withState<StoreState>(initialState),
  withMethods((store) => ({
    loadRequests() {
      if (store.firstLoad()) return of(store.requests());
      patchState(store, {isLoading: true});
      patchState(store, {firstLoad: true});
      return of(requestsTemplate.map(request => ({
        ...request,
        totalPrice: request.quantity * request.unitPrice
      }))).pipe(tap(requests => patchState(store, {requests})), finalize(() => patchState(store, {isLoading: false})));
    },
    updateRequests() {
      patchState(store, {isLoading: true});
      return of(store.requests().map(request => ({
        ...request,
        totalPrice: request.quantity * request.unitPrice
      }))).pipe(tap(requests => patchState(store, {requests})), finalize(() => patchState(store, {isLoading: false})));
    },
    deleteRequest(requestId: string) {
      patchState(store, {isLoading: true});
      patchState(store, {requests: store.requests().filter(request => request.id !== requestId)});
      patchState(store, {isLoading: false});
    },
    editRequest(request: Request) {
      patchState(store, {isLoading: true});
      patchState(store, {requests: store.requests().map(req => req.id == request.id ? request : req)});
      patchState(store, {isLoading: false});
    },
    addRequest(request: Omit<Request, 'id'>) {
      patchState(store, {isLoading: true});
      patchState(store, {
        requests: [...store.requests(), ({
          ...request,
          id: Math.random().toString().slice(10)
        })]
      });
      patchState(store, {isLoading: false});
    },
  }))
)
export type RequestStore = InstanceType<typeof RequestStore>;
