import { Middleware, Action } from 'redux';
import * as io from 'socket.io-client';

// tslint:disable-next-line:no-any
type FakeAny = any;
const EMIT = '__REDUX_SOCKET__ Emit';
export const ON = '__REDUX_SOCKET__ On';

export interface SocketEmitAction extends Action {
  payload: {
    event: string,
    args: FakeAny
  };
}
export const EmitAction = (payload: SocketEmitAction['payload']) => ({
  type: EMIT,
  payload: payload
});
export interface SocketOnAction extends Action {
  payload: {
    listener: string,
    data: FakeAny,
  };
}
export const OnAction = (payload: SocketOnAction['payload']) => ({
  type: ON,
  payload: payload
});

export default (socketUrl: string, onListeners: string[]): Middleware => {
  const socket = io(socketUrl);
  const clientSocket = socket.connect();
  const socketMiddleware: Middleware = store => {
    onListeners.forEach((listener) => {
      clientSocket.on(
        listener,
        (data: FakeAny) => store.dispatch(OnAction({
          listener,
          data
        }))
      );
    });

    return next => action => {
      if (action.type === EMIT) {
        // At this point action is a SocketEmitAction, but typescript is angry.
        const emitAction = action as FakeAny;
        clientSocket.emit(emitAction.payload.event, emitAction.payload.args);
      }
      return next(action);
    };
  };

  return socketMiddleware;
};
