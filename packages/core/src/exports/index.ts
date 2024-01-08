////////////////////////////////////////////////////////////////////////////////
// Actions
////////////////////////////////////////////////////////////////////////////////

export {
  type CallErrorType,
  type CallParameters,
  type CallReturnType,
  call,
} from '../actions/call.js'

export {
  type ConnectErrorType,
  type ConnectParameters,
  type ConnectReturnType,
  connect,
} from '../actions/connect.js'

export {
  type DisconnectErrorType,
  type DisconnectParameters,
  type DisconnectReturnType,
  disconnect,
} from '../actions/disconnect.js'

export {
  type EstimateGasErrorType,
  type EstimateGasParameters,
  type EstimateGasReturnType,
  estimateGas,
} from '../actions/estimateGas.js'

export {
  type EstimateFeesPerGasErrorType,
  type EstimateFeesPerGasParameters,
  type EstimateFeesPerGasReturnType,
  estimateFeesPerGas,
} from '../actions/estimateFeesPerGas.js'

export {
  type EstimateMaxPriorityFeePerGasErrorType,
  type EstimateMaxPriorityFeePerGasParameters,
  type EstimateMaxPriorityFeePerGasReturnType,
  estimateMaxPriorityFeePerGas,
} from '../actions/estimateMaxPriorityFeePerGas.js'

export {
  type GetAccountReturnType,
  getAccount,
} from '../actions/getAccount.js'

export {
  type GetBalanceParameters,
  type GetBalanceReturnType,
  type GetBalanceErrorType,
  getBalance,
  /** @deprecated use `getBalance` instead */
  getBalance as fetchBalance,
} from '../actions/getBalance.js'

export {
  type GetBlockErrorType,
  type GetBlockParameters,
  type GetBlockReturnType,
  getBlock,
} from '../actions/getBlock.js'

export {
  type GetBlockNumberErrorType,
  type GetBlockNumberParameters,
  type GetBlockNumberReturnType,
  getBlockNumber,
  /** @deprecated use `getBlockNumber` instead */
  getBlockNumber as fetchBlockNumber,
} from '../actions/getBlockNumber.js'

export {
  type GetBlockTransactionCountErrorType,
  type GetBlockTransactionCountParameters,
  type GetBlockTransactionCountReturnType,
  getBlockTransactionCount,
} from '../actions/getBlockTransactionCount.js'

export {
  type GetChainIdReturnType,
  getChainId,
} from '../actions/getChainId.js'

export {
  type GetClientParameters,
  type GetClientReturnType,
  getClient,
} from '../actions/getClient.js'

export {
  type GetConnectionsReturnType,
  getConnections,
} from '../actions/getConnections.js'

export {
  type GetConnectorsReturnType,
  getConnectors,
} from '../actions/getConnectors.js'

export {
  type GetConnectorClientErrorType,
  type GetConnectorClientParameters,
  type GetConnectorClientReturnType,
  getConnectorClient,
} from '../actions/getConnectorClient.js'

export {
  type GetEnsAddressErrorType,
  type GetEnsAddressParameters,
  type GetEnsAddressReturnType,
  getEnsAddress,
  /** @deprecated use `getEnsAddress` instead */
  getEnsAddress as fetchEnsAddress,
} from '../actions/getEnsAddress.js'

export {
  type GetEnsAvatarErrorType,
  type GetEnsAvatarParameters,
  type GetEnsAvatarReturnType,
  getEnsAvatar,
  /** @deprecated use `getEnsAvatar` instead */
  getEnsAvatar as fetchEnsAvatar,
} from '../actions/getEnsAvatar.js'

export {
  type GetEnsNameErrorType,
  type GetEnsNameParameters,
  type GetEnsNameReturnType,
  getEnsName,
  /** @deprecated */
  getEnsName as fetchEnsName,
} from '../actions/getEnsName.js'

export {
  type GetEnsResolverErrorType,
  type GetEnsResolverParameters,
  type GetEnsResolverReturnType,
  getEnsResolver,
  /** @deprecated use `getEnsResolver` instead */
  getEnsResolver as fetchEnsResolver,
} from '../actions/getEnsResolver.js'

export {
  type GetFeeHistoryErrorType,
  type GetFeeHistoryParameters,
  type GetFeeHistoryReturnType,
  getFeeHistory,
} from '../actions/getFeeHistory.js'

export {
  type GetGasPriceErrorType,
  type GetGasPriceParameters,
  type GetGasPriceReturnType,
  getGasPrice,
} from '../actions/getGasPrice.js'

export {
  type GetPublicClientParameters,
  type GetPublicClientReturnType,
  getPublicClient,
} from '../actions/getPublicClient.js'

export {
  type GetTokenErrorType,
  type GetTokenParameters,
  type GetTokenReturnType,
  getToken,
  /** @deprecated use `getToken` instead */
  getToken as fetchToken,
} from '../actions/getToken.js'

export {
  type GetTransactionErrorType,
  type GetTransactionParameters,
  type GetTransactionReturnType,
  getTransaction,
  /** @deprecated use `getTransaction` instead */
  getTransaction as fetchTransaction,
} from '../actions/getTransaction.js'

export {
  type GetTransactionCountErrorType,
  type GetTransactionCountParameters,
  type GetTransactionCountReturnType,
  getTransactionCount,
} from '../actions/getTransactionCount.js'

export {
  type GetWalletClientErrorType,
  type GetWalletClientParameters,
  type GetWalletClientReturnType,
  getWalletClient,
} from '../actions/getWalletClient.js'

export {
  type MulticallParameters,
  type MulticallReturnType,
  multicall,
} from '../actions/multicall.js'

export {
  type ReadContractParameters,
  type ReadContractReturnType,
  type ReadContractErrorType,
  readContract,
} from '../actions/readContract.js'

export {
  type ReadContractsParameters,
  type ReadContractsReturnType,
  type ReadContractsErrorType,
  readContracts,
} from '../actions/readContracts.js'

export {
  type ReconnectErrorType,
  type ReconnectParameters,
  type ReconnectReturnType,
  reconnect,
} from '../actions/reconnect.js'

export {
  type SendTransactionErrorType,
  type SendTransactionParameters,
  type SendTransactionReturnType,
  sendTransaction,
} from '../actions/sendTransaction.js'

export {
  type SignMessageErrorType,
  type SignMessageParameters,
  type SignMessageReturnType,
  signMessage,
} from '../actions/signMessage.js'

export {
  type SignTypedDataErrorType,
  type SignTypedDataParameters,
  type SignTypedDataReturnType,
  signTypedData,
} from '../actions/signTypedData.js'

export {
  type SimulateContractErrorType,
  type SimulateContractParameters,
  type SimulateContractReturnType,
  simulateContract,
} from '../actions/simulateContract.js'

export {
  type SwitchAccountErrorType,
  type SwitchAccountParameters,
  type SwitchAccountReturnType,
  switchAccount,
} from '../actions/switchAccount.js'

export {
  type SwitchChainErrorType,
  type SwitchChainParameters,
  type SwitchChainReturnType,
  switchChain,
  /** @deprecated use `switchChain` instead */
  switchChain as switchNetwork,
} from '../actions/switchChain.js'

export {
  type VerifyMessageErrorType,
  type VerifyMessageParameters,
  type VerifyMessageReturnType,
  verifyMessage,
} from '../actions/verifyMessage.js'

export {
  type VerifyTypedDataErrorType,
  type VerifyTypedDataParameters,
  type VerifyTypedDataReturnType,
  verifyTypedData,
} from '../actions/verifyTypedData.js'

export {
  type WatchAccountParameters,
  type WatchAccountReturnType,
  watchAccount,
} from '../actions/watchAccount.js'

export {
  type WatchBlocksParameters,
  type WatchBlocksReturnType,
  watchBlocks,
} from '../actions/watchBlocks.js'

export {
  type WatchBlockNumberParameters,
  type WatchBlockNumberReturnType,
  watchBlockNumber,
} from '../actions/watchBlockNumber.js'

export {
  type WatchChainIdParameters,
  type WatchChainIdReturnType,
  watchChainId,
} from '../actions/watchChainId.js'

export {
  type WatchClientParameters,
  type WatchClientReturnType,
  watchClient,
} from '../actions/watchClient.js'

export {
  type WatchConnectionsParameters,
  type WatchConnectionsReturnType,
  watchConnections,
} from '../actions/watchConnections.js'

export {
  type WatchConnectorsParameters,
  type WatchConnectorsReturnType,
  watchConnectors,
} from '../actions/watchConnectors.js'

export {
  type WatchContractEventParameters,
  type WatchContractEventReturnType,
  watchContractEvent,
} from '../actions/watchContractEvent.js'

export {
  type WatchPendingTransactionsParameters,
  type WatchPendingTransactionsReturnType,
  watchPendingTransactions,
} from '../actions/watchPendingTransactions.js'

export {
  type WatchPublicClientParameters,
  type WatchPublicClientReturnType,
  watchPublicClient,
} from '../actions/watchPublicClient.js'

export {
  type WaitForTransactionReceiptErrorType,
  type WaitForTransactionReceiptParameters,
  type WaitForTransactionReceiptReturnType,
  waitForTransactionReceipt,
  /** @deprecated use `waitForTransactionReceipt` instead */
  waitForTransactionReceipt as waitForTransaction,
} from '../actions/waitForTransactionReceipt.js'

export {
  type WriteContractErrorType,
  type WriteContractParameters,
  type WriteContractReturnType,
  writeContract,
} from '../actions/writeContract.js'

////////////////////////////////////////////////////////////////////////////////
// Connectors
////////////////////////////////////////////////////////////////////////////////

export {
  type ConnectorEventMap,
  type CreateConnectorFn,
  createConnector,
} from '../connectors/createConnector.js'

export {
  type InjectedParameters,
  injected,
} from '../connectors/injected.js'

export {
  type MockParameters,
  mock,
} from '../connectors/mock.js'

////////////////////////////////////////////////////////////////////////////////
// createConfig
////////////////////////////////////////////////////////////////////////////////

export {
  type Connection,
  type Connector,
  type Config,
  type CreateConfigParameters,
  type State,
  createConfig,
} from '../createConfig.js'

////////////////////////////////////////////////////////////////////////////////
// createStorage
////////////////////////////////////////////////////////////////////////////////

export {
  type CreateStorageParameters,
  type Storage,
  type StorageItemMap,
  createStorage,
  noopStorage,
} from '../createStorage.js'

////////////////////////////////////////////////////////////////////////////////
// Hydrate
////////////////////////////////////////////////////////////////////////////////

export { hydrate } from '../hydrate.js'

////////////////////////////////////////////////////////////////////////////////
// Errors
////////////////////////////////////////////////////////////////////////////////

export { BaseError } from '../errors/base.js'

export {
  type ChainNotConfiguredErrorType,
  ChainNotConfiguredError,
  type ConnectorNotConnectedErrorType,
  ConnectorNotConnectedError,
  type ConnectorAlreadyConnectedErrorType,
  ConnectorAlreadyConnectedError,
  type ConnectorNotFoundErrorType,
  ConnectorNotFoundError,
  type ConnectorAccountNotFoundErrorType,
  ConnectorAccountNotFoundError,
} from '../errors/config.js'

export {
  type ProviderNotFoundErrorType,
  ProviderNotFoundError,
  type SwitchChainNotSupportedErrorType,
  SwitchChainNotSupportedError,
} from '../errors/connector.js'

////////////////////////////////////////////////////////////////////////////////
// Transports
////////////////////////////////////////////////////////////////////////////////

export { custom, http, webSocket } from 'viem'

export { unstable_connector } from '../transports/connector.js'

export { fallback } from '../transports/fallback.js'

////////////////////////////////////////////////////////////////////////////////
// Types
////////////////////////////////////////////////////////////////////////////////

export { type Register, type ResolvedRegister } from '../types/register.js'

////////////////////////////////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////////////////////////////////

export {
  cookieStorage,
  cookieToInitialState,
  parseCookie,
} from '../utils/cookie.js'

export { deepEqual } from '../utils/deepEqual.js'

export { deserialize } from '../utils/deserialize.js'

export { normalizeChainId } from '../utils/normalizeChainId.js'

export { serialize } from '../utils/serialize.js'

////////////////////////////////////////////////////////////////////////////////
// Version
////////////////////////////////////////////////////////////////////////////////

export { version } from '../version.js'
