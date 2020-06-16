export type Shift<Tuple extends any[], Added> = ((added: Added, ...tuple: Tuple) => any) extends ((...result: infer Result) => any) ? Result : never

export type Unshift<T extends any[]> = ((...args: T) => void) extends ((first: any, ...args: infer R) => void) ? R : never

export type Push<Tuple extends any[], Added> = Reverse<Shift<Reverse<Tuple>, Added>>

export type Pop<T extends any[]> = Reverse<Unshift<Reverse<T>>>

export type Reverse<Tuple extends any[], Prefix extends any[] = []> = {
  0: Prefix
  1: ((...args: Tuple) => void) extends ((first: infer First, ...args: infer Next) => void)
  ? Reverse<Next, Shift<Prefix, First>>
  : never
}[Tuple extends [any, ...any[]] ? 1 : 0]
