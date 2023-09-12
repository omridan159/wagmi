import {
  type SignTypedDataError,
  type SignTypedDataReturnType,
} from '@wagmi/core'
import type { SignTypedDataVariables } from '@wagmi/core/query'
import { typedData } from '@wagmi/test'
import { expectTypeOf, test } from 'vitest'

import { useSignTypedData } from './useSignTypedData.js'

const contextValue = { foo: 'bar' } as const

test('context', () => {
  const { context, data, error, signTypedData, variables } = useSignTypedData({
    mutation: {
      onMutate(variables) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        return contextValue
      },
      onError(error, variables, context) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataError>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
      onSuccess(data, variables, context) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
      onSettled(data, error, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType | undefined>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataError | null>()
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
    },
  })

  expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType | undefined>()
  expectTypeOf(error).toEqualTypeOf<SignTypedDataError | null>()
  expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables | undefined>()
  expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()

  signTypedData(
    {
      types: typedData.basic.types,
      primaryType: 'Person',
      message: {
        name: 'Bob',
        wallet: '0x',
      },
    },
    {
      onError(error, variables, context) {
        expectTypeOf(error).toEqualTypeOf<SignTypedDataError>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person' | 'Mail' // TODO: Should narrow to `'Person'`
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
      onSuccess(data, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person' | 'Mail' // TODO: Should narrow to `'Person'`
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue>()
      },
      onSettled(data, error, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType | undefined>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataError | null>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person' | 'Mail' // TODO: Should narrow to `'Person'`
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
    },
  )
})
