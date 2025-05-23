
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model detail_sp
 * 
 */
export type detail_sp = $Result.DefaultSelection<Prisma.$detail_spPayload>
/**
 * Model doctors
 * 
 */
export type doctors = $Result.DefaultSelection<Prisma.$doctorsPayload>
/**
 * Model hospitals
 * 
 */
export type hospitals = $Result.DefaultSelection<Prisma.$hospitalsPayload>
/**
 * Model ml_booking
 * 
 */
export type ml_booking = $Result.DefaultSelection<Prisma.$ml_bookingPayload>
/**
 * Model practices
 * 
 */
export type practices = $Result.DefaultSelection<Prisma.$practicesPayload>
/**
 * Model schedules
 * 
 */
export type schedules = $Result.DefaultSelection<Prisma.$schedulesPayload>
/**
 * Model slot
 * 
 */
export type slot = $Result.DefaultSelection<Prisma.$slotPayload>
/**
 * Model specialists
 * 
 */
export type specialists = $Result.DefaultSelection<Prisma.$specialistsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model cities
 * 
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model provinces
 * 
 */
export type provinces = $Result.DefaultSelection<Prisma.$provincesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender_enum: {
  Laki_laki: 'Laki_laki',
  Perempuan: 'Perempuan'
};

export type gender_enum = (typeof gender_enum)[keyof typeof gender_enum]


export const hari_enum: {
  Senin: 'Senin',
  Selasa: 'Selasa',
  Rabu: 'Rabu',
  Kamis: 'Kamis',
  Jumat: 'Jumat',
  Sabtu: 'Sabtu',
  Minggu: 'Minggu'
};

export type hari_enum = (typeof hari_enum)[keyof typeof hari_enum]


export const status_doctor: {
  Aktif: 'Aktif',
  Nonaktif: 'Nonaktif',
  Cuti: 'Cuti',
  Suspend: 'Suspend'
};

export type status_doctor = (typeof status_doctor)[keyof typeof status_doctor]


export const status_rs: {
  Aktif: 'Aktif',
  Nonaktif: 'Nonaktif',
  Suspend: 'Suspend'
};

export type status_rs = (typeof status_rs)[keyof typeof status_rs]


export const tipe_enum: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
};

export type tipe_enum = (typeof tipe_enum)[keyof typeof tipe_enum]

}

export type gender_enum = $Enums.gender_enum

export const gender_enum: typeof $Enums.gender_enum

export type hari_enum = $Enums.hari_enum

export const hari_enum: typeof $Enums.hari_enum

export type status_doctor = $Enums.status_doctor

export const status_doctor: typeof $Enums.status_doctor

export type status_rs = $Enums.status_rs

export const status_rs: typeof $Enums.status_rs

export type tipe_enum = $Enums.tipe_enum

export const tipe_enum: typeof $Enums.tipe_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_sp`: Exposes CRUD operations for the **detail_sp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_sps
    * const detail_sps = await prisma.detail_sp.findMany()
    * ```
    */
  get detail_sp(): Prisma.detail_spDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctors`: Exposes CRUD operations for the **doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.doctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitals`: Exposes CRUD operations for the **hospitals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospitals.findMany()
    * ```
    */
  get hospitals(): Prisma.hospitalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ml_booking`: Exposes CRUD operations for the **ml_booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ml_bookings
    * const ml_bookings = await prisma.ml_booking.findMany()
    * ```
    */
  get ml_booking(): Prisma.ml_bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.practices`: Exposes CRUD operations for the **practices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Practices
    * const practices = await prisma.practices.findMany()
    * ```
    */
  get practices(): Prisma.practicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.schedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slot`: Exposes CRUD operations for the **slot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slot.findMany()
    * ```
    */
  get slot(): Prisma.slotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialists`: Exposes CRUD operations for the **specialists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialists
    * const specialists = await prisma.specialists.findMany()
    * ```
    */
  get specialists(): Prisma.specialistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provinces`: Exposes CRUD operations for the **provinces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.provinces.findMany()
    * ```
    */
  get provinces(): Prisma.provincesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bookings: 'bookings',
    detail_sp: 'detail_sp',
    doctors: 'doctors',
    hospitals: 'hospitals',
    ml_booking: 'ml_booking',
    practices: 'practices',
    schedules: 'schedules',
    slot: 'slot',
    specialists: 'specialists',
    users: 'users',
    cities: 'cities',
    provinces: 'provinces'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "detail_sp" | "doctors" | "hospitals" | "ml_booking" | "practices" | "schedules" | "slot" | "specialists" | "users" | "cities" | "provinces"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      detail_sp: {
        payload: Prisma.$detail_spPayload<ExtArgs>
        fields: Prisma.detail_spFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_spFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_spFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          findFirst: {
            args: Prisma.detail_spFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_spFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          findMany: {
            args: Prisma.detail_spFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>[]
          }
          create: {
            args: Prisma.detail_spCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          createMany: {
            args: Prisma.detail_spCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detail_spCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>[]
          }
          delete: {
            args: Prisma.detail_spDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          update: {
            args: Prisma.detail_spUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          deleteMany: {
            args: Prisma.detail_spDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_spUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detail_spUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>[]
          }
          upsert: {
            args: Prisma.detail_spUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_spPayload>
          }
          aggregate: {
            args: Prisma.Detail_spAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_sp>
          }
          groupBy: {
            args: Prisma.detail_spGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_spGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_spCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_spCountAggregateOutputType> | number
          }
        }
      }
      doctors: {
        payload: Prisma.$doctorsPayload<ExtArgs>
        fields: Prisma.doctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findFirst: {
            args: Prisma.doctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findMany: {
            args: Prisma.doctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          create: {
            args: Prisma.doctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          createMany: {
            args: Prisma.doctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          delete: {
            args: Prisma.doctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          update: {
            args: Prisma.doctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          deleteMany: {
            args: Prisma.doctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          upsert: {
            args: Prisma.doctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.doctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      hospitals: {
        payload: Prisma.$hospitalsPayload<ExtArgs>
        fields: Prisma.hospitalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hospitalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hospitalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          findFirst: {
            args: Prisma.hospitalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hospitalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          findMany: {
            args: Prisma.hospitalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          create: {
            args: Prisma.hospitalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          createMany: {
            args: Prisma.hospitalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hospitalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          delete: {
            args: Prisma.hospitalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          update: {
            args: Prisma.hospitalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          deleteMany: {
            args: Prisma.hospitalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hospitalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hospitalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>[]
          }
          upsert: {
            args: Prisma.hospitalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalsPayload>
          }
          aggregate: {
            args: Prisma.HospitalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitals>
          }
          groupBy: {
            args: Prisma.hospitalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hospitalsCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalsCountAggregateOutputType> | number
          }
        }
      }
      ml_booking: {
        payload: Prisma.$ml_bookingPayload<ExtArgs>
        fields: Prisma.ml_bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ml_bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ml_bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          findFirst: {
            args: Prisma.ml_bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ml_bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          findMany: {
            args: Prisma.ml_bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>[]
          }
          create: {
            args: Prisma.ml_bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          createMany: {
            args: Prisma.ml_bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ml_bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>[]
          }
          delete: {
            args: Prisma.ml_bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          update: {
            args: Prisma.ml_bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          deleteMany: {
            args: Prisma.ml_bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ml_bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ml_bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>[]
          }
          upsert: {
            args: Prisma.ml_bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ml_bookingPayload>
          }
          aggregate: {
            args: Prisma.Ml_bookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMl_booking>
          }
          groupBy: {
            args: Prisma.ml_bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ml_bookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ml_bookingCountArgs<ExtArgs>
            result: $Utils.Optional<Ml_bookingCountAggregateOutputType> | number
          }
        }
      }
      practices: {
        payload: Prisma.$practicesPayload<ExtArgs>
        fields: Prisma.practicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.practicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.practicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          findFirst: {
            args: Prisma.practicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.practicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          findMany: {
            args: Prisma.practicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>[]
          }
          create: {
            args: Prisma.practicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          createMany: {
            args: Prisma.practicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.practicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>[]
          }
          delete: {
            args: Prisma.practicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          update: {
            args: Prisma.practicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          deleteMany: {
            args: Prisma.practicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.practicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.practicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>[]
          }
          upsert: {
            args: Prisma.practicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicesPayload>
          }
          aggregate: {
            args: Prisma.PracticesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePractices>
          }
          groupBy: {
            args: Prisma.practicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticesGroupByOutputType>[]
          }
          count: {
            args: Prisma.practicesCountArgs<ExtArgs>
            result: $Utils.Optional<PracticesCountAggregateOutputType> | number
          }
        }
      }
      schedules: {
        payload: Prisma.$schedulesPayload<ExtArgs>
        fields: Prisma.schedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findFirst: {
            args: Prisma.schedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          findMany: {
            args: Prisma.schedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          create: {
            args: Prisma.schedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          createMany: {
            args: Prisma.schedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          delete: {
            args: Prisma.schedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          update: {
            args: Prisma.schedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          deleteMany: {
            args: Prisma.schedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>[]
          }
          upsert: {
            args: Prisma.schedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulesPayload>
          }
          aggregate: {
            args: Prisma.SchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedules>
          }
          groupBy: {
            args: Prisma.schedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.schedulesCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulesCountAggregateOutputType> | number
          }
        }
      }
      slot: {
        payload: Prisma.$slotPayload<ExtArgs>
        fields: Prisma.slotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.slotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.slotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          findFirst: {
            args: Prisma.slotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.slotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          findMany: {
            args: Prisma.slotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>[]
          }
          create: {
            args: Prisma.slotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          createMany: {
            args: Prisma.slotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.slotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>[]
          }
          delete: {
            args: Prisma.slotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          update: {
            args: Prisma.slotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          deleteMany: {
            args: Prisma.slotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.slotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.slotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>[]
          }
          upsert: {
            args: Prisma.slotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$slotPayload>
          }
          aggregate: {
            args: Prisma.SlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlot>
          }
          groupBy: {
            args: Prisma.slotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.slotCountArgs<ExtArgs>
            result: $Utils.Optional<SlotCountAggregateOutputType> | number
          }
        }
      }
      specialists: {
        payload: Prisma.$specialistsPayload<ExtArgs>
        fields: Prisma.specialistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specialistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specialistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          findFirst: {
            args: Prisma.specialistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specialistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          findMany: {
            args: Prisma.specialistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>[]
          }
          create: {
            args: Prisma.specialistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          createMany: {
            args: Prisma.specialistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.specialistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>[]
          }
          delete: {
            args: Prisma.specialistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          update: {
            args: Prisma.specialistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          deleteMany: {
            args: Prisma.specialistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specialistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.specialistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>[]
          }
          upsert: {
            args: Prisma.specialistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialistsPayload>
          }
          aggregate: {
            args: Prisma.SpecialistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialists>
          }
          groupBy: {
            args: Prisma.specialistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.specialistsCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialistsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.citiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.citiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      provinces: {
        payload: Prisma.$provincesPayload<ExtArgs>
        fields: Prisma.provincesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provincesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provincesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          findFirst: {
            args: Prisma.provincesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provincesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          findMany: {
            args: Prisma.provincesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          create: {
            args: Prisma.provincesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          createMany: {
            args: Prisma.provincesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.provincesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          delete: {
            args: Prisma.provincesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          update: {
            args: Prisma.provincesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          deleteMany: {
            args: Prisma.provincesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.provincesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.provincesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          upsert: {
            args: Prisma.provincesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          aggregate: {
            args: Prisma.ProvincesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvinces>
          }
          groupBy: {
            args: Prisma.provincesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvincesGroupByOutputType>[]
          }
          count: {
            args: Prisma.provincesCountArgs<ExtArgs>
            result: $Utils.Optional<ProvincesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    detail_sp?: detail_spOmit
    doctors?: doctorsOmit
    hospitals?: hospitalsOmit
    ml_booking?: ml_bookingOmit
    practices?: practicesOmit
    schedules?: schedulesOmit
    slot?: slotOmit
    specialists?: specialistsOmit
    users?: usersOmit
    cities?: citiesOmit
    provinces?: provincesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    detail_sp: number
    practices: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_sp?: boolean | DoctorsCountOutputTypeCountDetail_spArgs
    practices?: boolean | DoctorsCountOutputTypeCountPracticesArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountDetail_spArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_spWhereInput
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicesWhereInput
  }


  /**
   * Count Type HospitalsCountOutputType
   */

  export type HospitalsCountOutputType = {
    practices: number
  }

  export type HospitalsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practices?: boolean | HospitalsCountOutputTypeCountPracticesArgs
  }

  // Custom InputTypes
  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalsCountOutputType
     */
    select?: HospitalsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalsCountOutputType without action
   */
  export type HospitalsCountOutputTypeCountPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicesWhereInput
  }


  /**
   * Count Type PracticesCountOutputType
   */

  export type PracticesCountOutputType = {
    slot: number
  }

  export type PracticesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | PracticesCountOutputTypeCountSlotArgs
  }

  // Custom InputTypes
  /**
   * PracticesCountOutputType without action
   */
  export type PracticesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticesCountOutputType
     */
    select?: PracticesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PracticesCountOutputType without action
   */
  export type PracticesCountOutputTypeCountSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: slotWhereInput
  }


  /**
   * Count Type SchedulesCountOutputType
   */

  export type SchedulesCountOutputType = {
    practices: number
  }

  export type SchedulesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practices?: boolean | SchedulesCountOutputTypeCountPracticesArgs
  }

  // Custom InputTypes
  /**
   * SchedulesCountOutputType without action
   */
  export type SchedulesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulesCountOutputType
     */
    select?: SchedulesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulesCountOutputType without action
   */
  export type SchedulesCountOutputTypeCountPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicesWhereInput
  }


  /**
   * Count Type SlotCountOutputType
   */

  export type SlotCountOutputType = {
    bookings: number
  }

  export type SlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SlotCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotCountOutputType
     */
    select?: SlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SlotCountOutputType without action
   */
  export type SlotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type SpecialistsCountOutputType
   */

  export type SpecialistsCountOutputType = {
    detail_sp: number
    practices: number
  }

  export type SpecialistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_sp?: boolean | SpecialistsCountOutputTypeCountDetail_spArgs
    practices?: boolean | SpecialistsCountOutputTypeCountPracticesArgs
  }

  // Custom InputTypes
  /**
   * SpecialistsCountOutputType without action
   */
  export type SpecialistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistsCountOutputType
     */
    select?: SpecialistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialistsCountOutputType without action
   */
  export type SpecialistsCountOutputTypeCountDetail_spArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_spWhereInput
  }

  /**
   * SpecialistsCountOutputType without action
   */
  export type SpecialistsCountOutputTypeCountPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    hospitals: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | CitiesCountOutputTypeCountHospitalsArgs
  }

  // Custom InputTypes
  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     */
    select?: CitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountHospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalsWhereInput
  }


  /**
   * Count Type ProvincesCountOutputType
   */

  export type ProvincesCountOutputType = {
    cities: number
    hospitals: number
  }

  export type ProvincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | ProvincesCountOutputTypeCountCitiesArgs
    hospitals?: boolean | ProvincesCountOutputTypeCountHospitalsArgs
  }

  // Custom InputTypes
  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvincesCountOutputType
     */
    select?: ProvincesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountHospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    no_antrian: number | null
    durasi: number | null
  }

  export type BookingsSumAggregateOutputType = {
    no_antrian: number | null
    durasi: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id_user: string | null
    id_slot: string | null
    no_antrian: number | null
    status: string | null
    start_consul: Date | null
    end_consul: Date | null
    gejala: string | null
    durasi: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    id_user: string | null
    id_slot: string | null
    no_antrian: number | null
    status: string | null
    start_consul: Date | null
    end_consul: Date | null
    gejala: string | null
    durasi: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    id_user: number
    id_slot: number
    no_antrian: number
    status: number
    start_consul: number
    end_consul: number
    gejala: number
    durasi: number
    create_at: number
    update_at: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    no_antrian?: true
    durasi?: true
  }

  export type BookingsSumAggregateInputType = {
    no_antrian?: true
    durasi?: true
  }

  export type BookingsMinAggregateInputType = {
    id_user?: true
    id_slot?: true
    no_antrian?: true
    status?: true
    start_consul?: true
    end_consul?: true
    gejala?: true
    durasi?: true
    create_at?: true
    update_at?: true
  }

  export type BookingsMaxAggregateInputType = {
    id_user?: true
    id_slot?: true
    no_antrian?: true
    status?: true
    start_consul?: true
    end_consul?: true
    gejala?: true
    durasi?: true
    create_at?: true
    update_at?: true
  }

  export type BookingsCountAggregateInputType = {
    id_user?: true
    id_slot?: true
    no_antrian?: true
    status?: true
    start_consul?: true
    end_consul?: true
    gejala?: true
    durasi?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id_user: string
    id_slot: string
    no_antrian: number
    status: string
    start_consul: Date | null
    end_consul: Date | null
    gejala: string | null
    durasi: number | null
    create_at: Date | null
    update_at: Date | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_slot?: boolean
    no_antrian?: boolean
    status?: boolean
    start_consul?: boolean
    end_consul?: boolean
    gejala?: boolean
    durasi?: boolean
    create_at?: boolean
    update_at?: boolean
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_slot?: boolean
    no_antrian?: boolean
    status?: boolean
    start_consul?: boolean
    end_consul?: boolean
    gejala?: boolean
    durasi?: boolean
    create_at?: boolean
    update_at?: boolean
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_slot?: boolean
    no_antrian?: boolean
    status?: boolean
    start_consul?: boolean
    end_consul?: boolean
    gejala?: boolean
    durasi?: boolean
    create_at?: boolean
    update_at?: boolean
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id_user?: boolean
    id_slot?: boolean
    no_antrian?: boolean
    status?: boolean
    start_consul?: boolean
    end_consul?: boolean
    gejala?: boolean
    durasi?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_slot" | "no_antrian" | "status" | "start_consul" | "end_consul" | "gejala" | "durasi" | "create_at" | "update_at", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slot?: boolean | slotDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      slot: Prisma.$slotPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_slot: string
      no_antrian: number
      status: string
      start_consul: Date | null
      end_consul: Date | null
      gejala: string | null
      durasi: number | null
      create_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const bookingsWithId_userOnly = await prisma.bookings.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id_user`
     * const bookingsWithId_userOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id_user`
     * const bookingsWithId_userOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slot<T extends slotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, slotDefaultArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id_user: FieldRef<"bookings", 'String'>
    readonly id_slot: FieldRef<"bookings", 'String'>
    readonly no_antrian: FieldRef<"bookings", 'Int'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly start_consul: FieldRef<"bookings", 'DateTime'>
    readonly end_consul: FieldRef<"bookings", 'DateTime'>
    readonly gejala: FieldRef<"bookings", 'String'>
    readonly durasi: FieldRef<"bookings", 'Int'>
    readonly create_at: FieldRef<"bookings", 'DateTime'>
    readonly update_at: FieldRef<"bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model detail_sp
   */

  export type AggregateDetail_sp = {
    _count: Detail_spCountAggregateOutputType | null
    _min: Detail_spMinAggregateOutputType | null
    _max: Detail_spMaxAggregateOutputType | null
  }

  export type Detail_spMinAggregateOutputType = {
    lisensi: string | null
    id_sp: string | null
  }

  export type Detail_spMaxAggregateOutputType = {
    lisensi: string | null
    id_sp: string | null
  }

  export type Detail_spCountAggregateOutputType = {
    lisensi: number
    id_sp: number
    _all: number
  }


  export type Detail_spMinAggregateInputType = {
    lisensi?: true
    id_sp?: true
  }

  export type Detail_spMaxAggregateInputType = {
    lisensi?: true
    id_sp?: true
  }

  export type Detail_spCountAggregateInputType = {
    lisensi?: true
    id_sp?: true
    _all?: true
  }

  export type Detail_spAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_sp to aggregate.
     */
    where?: detail_spWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_sps to fetch.
     */
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_spWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_sps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_sps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_sps
    **/
    _count?: true | Detail_spCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_spMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_spMaxAggregateInputType
  }

  export type GetDetail_spAggregateType<T extends Detail_spAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_sp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_sp[P]>
      : GetScalarType<T[P], AggregateDetail_sp[P]>
  }




  export type detail_spGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_spWhereInput
    orderBy?: detail_spOrderByWithAggregationInput | detail_spOrderByWithAggregationInput[]
    by: Detail_spScalarFieldEnum[] | Detail_spScalarFieldEnum
    having?: detail_spScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_spCountAggregateInputType | true
    _min?: Detail_spMinAggregateInputType
    _max?: Detail_spMaxAggregateInputType
  }

  export type Detail_spGroupByOutputType = {
    lisensi: string
    id_sp: string
    _count: Detail_spCountAggregateOutputType | null
    _min: Detail_spMinAggregateOutputType | null
    _max: Detail_spMaxAggregateOutputType | null
  }

  type GetDetail_spGroupByPayload<T extends detail_spGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_spGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_spGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_spGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_spGroupByOutputType[P]>
        }
      >
    >


  export type detail_spSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    id_sp?: boolean
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_sp"]>

  export type detail_spSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    id_sp?: boolean
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_sp"]>

  export type detail_spSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    id_sp?: boolean
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_sp"]>

  export type detail_spSelectScalar = {
    lisensi?: boolean
    id_sp?: boolean
  }

  export type detail_spOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lisensi" | "id_sp", ExtArgs["result"]["detail_sp"]>
  export type detail_spInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }
  export type detail_spIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }
  export type detail_spIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }

  export type $detail_spPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_sp"
    objects: {
      specialists: Prisma.$specialistsPayload<ExtArgs>
      doctors: Prisma.$doctorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lisensi: string
      id_sp: string
    }, ExtArgs["result"]["detail_sp"]>
    composites: {}
  }

  type detail_spGetPayload<S extends boolean | null | undefined | detail_spDefaultArgs> = $Result.GetResult<Prisma.$detail_spPayload, S>

  type detail_spCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_spFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_spCountAggregateInputType | true
    }

  export interface detail_spDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_sp'], meta: { name: 'detail_sp' } }
    /**
     * Find zero or one Detail_sp that matches the filter.
     * @param {detail_spFindUniqueArgs} args - Arguments to find a Detail_sp
     * @example
     * // Get one Detail_sp
     * const detail_sp = await prisma.detail_sp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_spFindUniqueArgs>(args: SelectSubset<T, detail_spFindUniqueArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_sp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_spFindUniqueOrThrowArgs} args - Arguments to find a Detail_sp
     * @example
     * // Get one Detail_sp
     * const detail_sp = await prisma.detail_sp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_spFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_spFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_sp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spFindFirstArgs} args - Arguments to find a Detail_sp
     * @example
     * // Get one Detail_sp
     * const detail_sp = await prisma.detail_sp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_spFindFirstArgs>(args?: SelectSubset<T, detail_spFindFirstArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_sp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spFindFirstOrThrowArgs} args - Arguments to find a Detail_sp
     * @example
     * // Get one Detail_sp
     * const detail_sp = await prisma.detail_sp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_spFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_spFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_sps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_sps
     * const detail_sps = await prisma.detail_sp.findMany()
     * 
     * // Get first 10 Detail_sps
     * const detail_sps = await prisma.detail_sp.findMany({ take: 10 })
     * 
     * // Only select the `lisensi`
     * const detail_spWithLisensiOnly = await prisma.detail_sp.findMany({ select: { lisensi: true } })
     * 
     */
    findMany<T extends detail_spFindManyArgs>(args?: SelectSubset<T, detail_spFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_sp.
     * @param {detail_spCreateArgs} args - Arguments to create a Detail_sp.
     * @example
     * // Create one Detail_sp
     * const Detail_sp = await prisma.detail_sp.create({
     *   data: {
     *     // ... data to create a Detail_sp
     *   }
     * })
     * 
     */
    create<T extends detail_spCreateArgs>(args: SelectSubset<T, detail_spCreateArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_sps.
     * @param {detail_spCreateManyArgs} args - Arguments to create many Detail_sps.
     * @example
     * // Create many Detail_sps
     * const detail_sp = await prisma.detail_sp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_spCreateManyArgs>(args?: SelectSubset<T, detail_spCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detail_sps and returns the data saved in the database.
     * @param {detail_spCreateManyAndReturnArgs} args - Arguments to create many Detail_sps.
     * @example
     * // Create many Detail_sps
     * const detail_sp = await prisma.detail_sp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detail_sps and only return the `lisensi`
     * const detail_spWithLisensiOnly = await prisma.detail_sp.createManyAndReturn({
     *   select: { lisensi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detail_spCreateManyAndReturnArgs>(args?: SelectSubset<T, detail_spCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detail_sp.
     * @param {detail_spDeleteArgs} args - Arguments to delete one Detail_sp.
     * @example
     * // Delete one Detail_sp
     * const Detail_sp = await prisma.detail_sp.delete({
     *   where: {
     *     // ... filter to delete one Detail_sp
     *   }
     * })
     * 
     */
    delete<T extends detail_spDeleteArgs>(args: SelectSubset<T, detail_spDeleteArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_sp.
     * @param {detail_spUpdateArgs} args - Arguments to update one Detail_sp.
     * @example
     * // Update one Detail_sp
     * const detail_sp = await prisma.detail_sp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_spUpdateArgs>(args: SelectSubset<T, detail_spUpdateArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_sps.
     * @param {detail_spDeleteManyArgs} args - Arguments to filter Detail_sps to delete.
     * @example
     * // Delete a few Detail_sps
     * const { count } = await prisma.detail_sp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_spDeleteManyArgs>(args?: SelectSubset<T, detail_spDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_sps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_sps
     * const detail_sp = await prisma.detail_sp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_spUpdateManyArgs>(args: SelectSubset<T, detail_spUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_sps and returns the data updated in the database.
     * @param {detail_spUpdateManyAndReturnArgs} args - Arguments to update many Detail_sps.
     * @example
     * // Update many Detail_sps
     * const detail_sp = await prisma.detail_sp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detail_sps and only return the `lisensi`
     * const detail_spWithLisensiOnly = await prisma.detail_sp.updateManyAndReturn({
     *   select: { lisensi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detail_spUpdateManyAndReturnArgs>(args: SelectSubset<T, detail_spUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detail_sp.
     * @param {detail_spUpsertArgs} args - Arguments to update or create a Detail_sp.
     * @example
     * // Update or create a Detail_sp
     * const detail_sp = await prisma.detail_sp.upsert({
     *   create: {
     *     // ... data to create a Detail_sp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_sp we want to update
     *   }
     * })
     */
    upsert<T extends detail_spUpsertArgs>(args: SelectSubset<T, detail_spUpsertArgs<ExtArgs>>): Prisma__detail_spClient<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_sps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spCountArgs} args - Arguments to filter Detail_sps to count.
     * @example
     * // Count the number of Detail_sps
     * const count = await prisma.detail_sp.count({
     *   where: {
     *     // ... the filter for the Detail_sps we want to count
     *   }
     * })
    **/
    count<T extends detail_spCountArgs>(
      args?: Subset<T, detail_spCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_spCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_sp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_spAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_spAggregateArgs>(args: Subset<T, Detail_spAggregateArgs>): Prisma.PrismaPromise<GetDetail_spAggregateType<T>>

    /**
     * Group by Detail_sp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_spGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detail_spGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_spGroupByArgs['orderBy'] }
        : { orderBy?: detail_spGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detail_spGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_spGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_sp model
   */
  readonly fields: detail_spFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_sp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_spClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialists<T extends specialistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specialistsDefaultArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctors<T extends doctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorsDefaultArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_sp model
   */
  interface detail_spFieldRefs {
    readonly lisensi: FieldRef<"detail_sp", 'String'>
    readonly id_sp: FieldRef<"detail_sp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detail_sp findUnique
   */
  export type detail_spFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter, which detail_sp to fetch.
     */
    where: detail_spWhereUniqueInput
  }

  /**
   * detail_sp findUniqueOrThrow
   */
  export type detail_spFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter, which detail_sp to fetch.
     */
    where: detail_spWhereUniqueInput
  }

  /**
   * detail_sp findFirst
   */
  export type detail_spFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter, which detail_sp to fetch.
     */
    where?: detail_spWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_sps to fetch.
     */
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_sps.
     */
    cursor?: detail_spWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_sps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_sps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_sps.
     */
    distinct?: Detail_spScalarFieldEnum | Detail_spScalarFieldEnum[]
  }

  /**
   * detail_sp findFirstOrThrow
   */
  export type detail_spFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter, which detail_sp to fetch.
     */
    where?: detail_spWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_sps to fetch.
     */
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_sps.
     */
    cursor?: detail_spWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_sps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_sps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_sps.
     */
    distinct?: Detail_spScalarFieldEnum | Detail_spScalarFieldEnum[]
  }

  /**
   * detail_sp findMany
   */
  export type detail_spFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter, which detail_sps to fetch.
     */
    where?: detail_spWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_sps to fetch.
     */
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_sps.
     */
    cursor?: detail_spWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_sps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_sps.
     */
    skip?: number
    distinct?: Detail_spScalarFieldEnum | Detail_spScalarFieldEnum[]
  }

  /**
   * detail_sp create
   */
  export type detail_spCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_sp.
     */
    data: XOR<detail_spCreateInput, detail_spUncheckedCreateInput>
  }

  /**
   * detail_sp createMany
   */
  export type detail_spCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_sps.
     */
    data: detail_spCreateManyInput | detail_spCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_sp createManyAndReturn
   */
  export type detail_spCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * The data used to create many detail_sps.
     */
    data: detail_spCreateManyInput | detail_spCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_sp update
   */
  export type detail_spUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_sp.
     */
    data: XOR<detail_spUpdateInput, detail_spUncheckedUpdateInput>
    /**
     * Choose, which detail_sp to update.
     */
    where: detail_spWhereUniqueInput
  }

  /**
   * detail_sp updateMany
   */
  export type detail_spUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_sps.
     */
    data: XOR<detail_spUpdateManyMutationInput, detail_spUncheckedUpdateManyInput>
    /**
     * Filter which detail_sps to update
     */
    where?: detail_spWhereInput
    /**
     * Limit how many detail_sps to update.
     */
    limit?: number
  }

  /**
   * detail_sp updateManyAndReturn
   */
  export type detail_spUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * The data used to update detail_sps.
     */
    data: XOR<detail_spUpdateManyMutationInput, detail_spUncheckedUpdateManyInput>
    /**
     * Filter which detail_sps to update
     */
    where?: detail_spWhereInput
    /**
     * Limit how many detail_sps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_sp upsert
   */
  export type detail_spUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_sp to update in case it exists.
     */
    where: detail_spWhereUniqueInput
    /**
     * In case the detail_sp found by the `where` argument doesn't exist, create a new detail_sp with this data.
     */
    create: XOR<detail_spCreateInput, detail_spUncheckedCreateInput>
    /**
     * In case the detail_sp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_spUpdateInput, detail_spUncheckedUpdateInput>
  }

  /**
   * detail_sp delete
   */
  export type detail_spDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    /**
     * Filter which detail_sp to delete.
     */
    where: detail_spWhereUniqueInput
  }

  /**
   * detail_sp deleteMany
   */
  export type detail_spDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_sps to delete
     */
    where?: detail_spWhereInput
    /**
     * Limit how many detail_sps to delete.
     */
    limit?: number
  }

  /**
   * detail_sp without action
   */
  export type detail_spDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
  }


  /**
   * Model doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsMinAggregateOutputType = {
    lisensi: string | null
    nama_dokter: string | null
    email: string | null
    sandi_dokter: string | null
    gender: $Enums.gender_enum | null
    tgl_lahir: Date | null
    status: $Enums.status_doctor | null
    foto: Uint8Array | null
    create_at: Date | null
    update_at: Date | null
  }

  export type DoctorsMaxAggregateOutputType = {
    lisensi: string | null
    nama_dokter: string | null
    email: string | null
    sandi_dokter: string | null
    gender: $Enums.gender_enum | null
    tgl_lahir: Date | null
    status: $Enums.status_doctor | null
    foto: Uint8Array | null
    create_at: Date | null
    update_at: Date | null
  }

  export type DoctorsCountAggregateOutputType = {
    lisensi: number
    nama_dokter: number
    email: number
    sandi_dokter: number
    gender: number
    tgl_lahir: number
    status: number
    foto: number
    create_at: number
    update_at: number
    _all: number
  }


  export type DoctorsMinAggregateInputType = {
    lisensi?: true
    nama_dokter?: true
    email?: true
    sandi_dokter?: true
    gender?: true
    tgl_lahir?: true
    status?: true
    foto?: true
    create_at?: true
    update_at?: true
  }

  export type DoctorsMaxAggregateInputType = {
    lisensi?: true
    nama_dokter?: true
    email?: true
    sandi_dokter?: true
    gender?: true
    tgl_lahir?: true
    status?: true
    foto?: true
    create_at?: true
    update_at?: true
  }

  export type DoctorsCountAggregateInputType = {
    lisensi?: true
    nama_dokter?: true
    email?: true
    sandi_dokter?: true
    gender?: true
    tgl_lahir?: true
    status?: true
    foto?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to aggregate.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type doctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorsWhereInput
    orderBy?: doctorsOrderByWithAggregationInput | doctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: doctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date
    status: $Enums.status_doctor
    foto: Uint8Array | null
    create_at: Date | null
    update_at: Date | null
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends doctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type doctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    nama_dokter?: boolean
    email?: boolean
    sandi_dokter?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    status?: boolean
    foto?: boolean
    create_at?: boolean
    update_at?: boolean
    detail_sp?: boolean | doctors$detail_spArgs<ExtArgs>
    practices?: boolean | doctors$practicesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    nama_dokter?: boolean
    email?: boolean
    sandi_dokter?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    status?: boolean
    foto?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lisensi?: boolean
    nama_dokter?: boolean
    email?: boolean
    sandi_dokter?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    status?: boolean
    foto?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectScalar = {
    lisensi?: boolean
    nama_dokter?: boolean
    email?: boolean
    sandi_dokter?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    status?: boolean
    foto?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type doctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lisensi" | "nama_dokter" | "email" | "sandi_dokter" | "gender" | "tgl_lahir" | "status" | "foto" | "create_at" | "update_at", ExtArgs["result"]["doctors"]>
  export type doctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_sp?: boolean | doctors$detail_spArgs<ExtArgs>
    practices?: boolean | doctors$practicesArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doctorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type doctorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $doctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctors"
    objects: {
      detail_sp: Prisma.$detail_spPayload<ExtArgs>[]
      practices: Prisma.$practicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      lisensi: string
      nama_dokter: string
      email: string
      sandi_dokter: string
      gender: $Enums.gender_enum
      tgl_lahir: Date
      status: $Enums.status_doctor
      foto: Uint8Array | null
      create_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type doctorsGetPayload<S extends boolean | null | undefined | doctorsDefaultArgs> = $Result.GetResult<Prisma.$doctorsPayload, S>

  type doctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface doctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctors'], meta: { name: 'doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {doctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorsFindUniqueArgs>(args: SelectSubset<T, doctorsFindUniqueArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorsFindFirstArgs>(args?: SelectSubset<T, doctorsFindFirstArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `lisensi`
     * const doctorsWithLisensiOnly = await prisma.doctors.findMany({ select: { lisensi: true } })
     * 
     */
    findMany<T extends doctorsFindManyArgs>(args?: SelectSubset<T, doctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctors.
     * @param {doctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends doctorsCreateArgs>(args: SelectSubset<T, doctorsCreateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorsCreateManyArgs>(args?: SelectSubset<T, doctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {doctorsCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `lisensi`
     * const doctorsWithLisensiOnly = await prisma.doctors.createManyAndReturn({
     *   select: { lisensi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorsCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctors.
     * @param {doctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends doctorsDeleteArgs>(args: SelectSubset<T, doctorsDeleteArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctors.
     * @param {doctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorsUpdateArgs>(args: SelectSubset<T, doctorsUpdateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorsDeleteManyArgs>(args?: SelectSubset<T, doctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorsUpdateManyArgs>(args: SelectSubset<T, doctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {doctorsUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `lisensi`
     * const doctorsWithLisensiOnly = await prisma.doctors.updateManyAndReturn({
     *   select: { lisensi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends doctorsUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctors.
     * @param {doctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends doctorsUpsertArgs>(args: SelectSubset<T, doctorsUpsertArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorsCountArgs>(
      args?: Subset<T, doctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorsGroupByArgs['orderBy'] }
        : { orderBy?: doctorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctors model
   */
  readonly fields: doctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_sp<T extends doctors$detail_spArgs<ExtArgs> = {}>(args?: Subset<T, doctors$detail_spArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    practices<T extends doctors$practicesArgs<ExtArgs> = {}>(args?: Subset<T, doctors$practicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctors model
   */
  interface doctorsFieldRefs {
    readonly lisensi: FieldRef<"doctors", 'String'>
    readonly nama_dokter: FieldRef<"doctors", 'String'>
    readonly email: FieldRef<"doctors", 'String'>
    readonly sandi_dokter: FieldRef<"doctors", 'String'>
    readonly gender: FieldRef<"doctors", 'gender_enum'>
    readonly tgl_lahir: FieldRef<"doctors", 'DateTime'>
    readonly status: FieldRef<"doctors", 'status_doctor'>
    readonly foto: FieldRef<"doctors", 'Bytes'>
    readonly create_at: FieldRef<"doctors", 'DateTime'>
    readonly update_at: FieldRef<"doctors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * doctors findUnique
   */
  export type doctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findUniqueOrThrow
   */
  export type doctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findFirst
   */
  export type doctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findFirstOrThrow
   */
  export type doctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findMany
   */
  export type doctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors create
   */
  export type doctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a doctors.
     */
    data: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
  }

  /**
   * doctors createMany
   */
  export type doctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctors createManyAndReturn
   */
  export type doctorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctors update
   */
  export type doctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a doctors.
     */
    data: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
    /**
     * Choose, which doctors to update.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors updateMany
   */
  export type doctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctors updateManyAndReturn
   */
  export type doctorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctors upsert
   */
  export type doctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the doctors to update in case it exists.
     */
    where: doctorsWhereUniqueInput
    /**
     * In case the doctors found by the `where` argument doesn't exist, create a new doctors with this data.
     */
    create: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
    /**
     * In case the doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
  }

  /**
   * doctors delete
   */
  export type doctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter which doctors to delete.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors deleteMany
   */
  export type doctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctors.detail_sp
   */
  export type doctors$detail_spArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    where?: detail_spWhereInput
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    cursor?: detail_spWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_spScalarFieldEnum | Detail_spScalarFieldEnum[]
  }

  /**
   * doctors.practices
   */
  export type doctors$practicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    where?: practicesWhereInput
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    cursor?: practicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * doctors without action
   */
  export type doctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
  }


  /**
   * Model hospitals
   */

  export type AggregateHospitals = {
    _count: HospitalsCountAggregateOutputType | null
    _avg: HospitalsAvgAggregateOutputType | null
    _sum: HospitalsSumAggregateOutputType | null
    _min: HospitalsMinAggregateOutputType | null
    _max: HospitalsMaxAggregateOutputType | null
  }

  export type HospitalsAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
  }

  export type HospitalsSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
  }

  export type HospitalsMinAggregateOutputType = {
    id_rs: string | null
    sandi_admin: string | null
    nama_rs: string | null
    tipe: $Enums.tipe_enum | null
    status: $Enums.status_rs | null
    deskripsi: string | null
    foto: Uint8Array | null
    alamat: string | null
    kode_pos: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    create_at: Date | null
    update_at: Date | null
    id_kota: number | null
    id_prov: number | null
  }

  export type HospitalsMaxAggregateOutputType = {
    id_rs: string | null
    sandi_admin: string | null
    nama_rs: string | null
    tipe: $Enums.tipe_enum | null
    status: $Enums.status_rs | null
    deskripsi: string | null
    foto: Uint8Array | null
    alamat: string | null
    kode_pos: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    create_at: Date | null
    update_at: Date | null
    id_kota: number | null
    id_prov: number | null
  }

  export type HospitalsCountAggregateOutputType = {
    id_rs: number
    sandi_admin: number
    nama_rs: number
    tipe: number
    status: number
    deskripsi: number
    foto: number
    alamat: number
    kode_pos: number
    latitude: number
    longitude: number
    create_at: number
    update_at: number
    id_kota: number
    id_prov: number
    _all: number
  }


  export type HospitalsAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
  }

  export type HospitalsSumAggregateInputType = {
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
  }

  export type HospitalsMinAggregateInputType = {
    id_rs?: true
    sandi_admin?: true
    nama_rs?: true
    tipe?: true
    status?: true
    deskripsi?: true
    foto?: true
    alamat?: true
    kode_pos?: true
    latitude?: true
    longitude?: true
    create_at?: true
    update_at?: true
    id_kota?: true
    id_prov?: true
  }

  export type HospitalsMaxAggregateInputType = {
    id_rs?: true
    sandi_admin?: true
    nama_rs?: true
    tipe?: true
    status?: true
    deskripsi?: true
    foto?: true
    alamat?: true
    kode_pos?: true
    latitude?: true
    longitude?: true
    create_at?: true
    update_at?: true
    id_kota?: true
    id_prov?: true
  }

  export type HospitalsCountAggregateInputType = {
    id_rs?: true
    sandi_admin?: true
    nama_rs?: true
    tipe?: true
    status?: true
    deskripsi?: true
    foto?: true
    alamat?: true
    kode_pos?: true
    latitude?: true
    longitude?: true
    create_at?: true
    update_at?: true
    id_kota?: true
    id_prov?: true
    _all?: true
  }

  export type HospitalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to aggregate.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hospitals
    **/
    _count?: true | HospitalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalsMaxAggregateInputType
  }

  export type GetHospitalsAggregateType<T extends HospitalsAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitals[P]>
      : GetScalarType<T[P], AggregateHospitals[P]>
  }




  export type hospitalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalsWhereInput
    orderBy?: hospitalsOrderByWithAggregationInput | hospitalsOrderByWithAggregationInput[]
    by: HospitalsScalarFieldEnum[] | HospitalsScalarFieldEnum
    having?: hospitalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalsCountAggregateInputType | true
    _avg?: HospitalsAvgAggregateInputType
    _sum?: HospitalsSumAggregateInputType
    _min?: HospitalsMinAggregateInputType
    _max?: HospitalsMaxAggregateInputType
  }

  export type HospitalsGroupByOutputType = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi: string | null
    foto: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal
    longitude: Decimal
    create_at: Date | null
    update_at: Date | null
    id_kota: number | null
    id_prov: number | null
    _count: HospitalsCountAggregateOutputType | null
    _avg: HospitalsAvgAggregateOutputType | null
    _sum: HospitalsSumAggregateOutputType | null
    _min: HospitalsMinAggregateOutputType | null
    _max: HospitalsMaxAggregateOutputType | null
  }

  type GetHospitalsGroupByPayload<T extends hospitalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalsGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalsGroupByOutputType[P]>
        }
      >
    >


  export type hospitalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rs?: boolean
    sandi_admin?: boolean
    nama_rs?: boolean
    tipe?: boolean
    status?: boolean
    deskripsi?: boolean
    foto?: boolean
    alamat?: boolean
    kode_pos?: boolean
    latitude?: boolean
    longitude?: boolean
    create_at?: boolean
    update_at?: boolean
    id_kota?: boolean
    id_prov?: boolean
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
    practices?: boolean | hospitals$practicesArgs<ExtArgs>
    _count?: boolean | HospitalsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rs?: boolean
    sandi_admin?: boolean
    nama_rs?: boolean
    tipe?: boolean
    status?: boolean
    deskripsi?: boolean
    foto?: boolean
    alamat?: boolean
    kode_pos?: boolean
    latitude?: boolean
    longitude?: boolean
    create_at?: boolean
    update_at?: boolean
    id_kota?: boolean
    id_prov?: boolean
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rs?: boolean
    sandi_admin?: boolean
    nama_rs?: boolean
    tipe?: boolean
    status?: boolean
    deskripsi?: boolean
    foto?: boolean
    alamat?: boolean
    kode_pos?: boolean
    latitude?: boolean
    longitude?: boolean
    create_at?: boolean
    update_at?: boolean
    id_kota?: boolean
    id_prov?: boolean
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
  }, ExtArgs["result"]["hospitals"]>

  export type hospitalsSelectScalar = {
    id_rs?: boolean
    sandi_admin?: boolean
    nama_rs?: boolean
    tipe?: boolean
    status?: boolean
    deskripsi?: boolean
    foto?: boolean
    alamat?: boolean
    kode_pos?: boolean
    latitude?: boolean
    longitude?: boolean
    create_at?: boolean
    update_at?: boolean
    id_kota?: boolean
    id_prov?: boolean
  }

  export type hospitalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rs" | "sandi_admin" | "nama_rs" | "tipe" | "status" | "deskripsi" | "foto" | "alamat" | "kode_pos" | "latitude" | "longitude" | "create_at" | "update_at" | "id_kota" | "id_prov", ExtArgs["result"]["hospitals"]>
  export type hospitalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
    practices?: boolean | hospitals$practicesArgs<ExtArgs>
    _count?: boolean | HospitalsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hospitalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
  }
  export type hospitalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | hospitals$citiesArgs<ExtArgs>
    provinces?: boolean | hospitals$provincesArgs<ExtArgs>
  }

  export type $hospitalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hospitals"
    objects: {
      cities: Prisma.$citiesPayload<ExtArgs> | null
      provinces: Prisma.$provincesPayload<ExtArgs> | null
      practices: Prisma.$practicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rs: string
      sandi_admin: string
      nama_rs: string
      tipe: $Enums.tipe_enum
      status: $Enums.status_rs
      deskripsi: string | null
      foto: Uint8Array | null
      alamat: string
      kode_pos: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      create_at: Date | null
      update_at: Date | null
      id_kota: number | null
      id_prov: number | null
    }, ExtArgs["result"]["hospitals"]>
    composites: {}
  }

  type hospitalsGetPayload<S extends boolean | null | undefined | hospitalsDefaultArgs> = $Result.GetResult<Prisma.$hospitalsPayload, S>

  type hospitalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hospitalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalsCountAggregateInputType | true
    }

  export interface hospitalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospitals'], meta: { name: 'hospitals' } }
    /**
     * Find zero or one Hospitals that matches the filter.
     * @param {hospitalsFindUniqueArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hospitalsFindUniqueArgs>(args: SelectSubset<T, hospitalsFindUniqueArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospitals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hospitalsFindUniqueOrThrowArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hospitalsFindUniqueOrThrowArgs>(args: SelectSubset<T, hospitalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindFirstArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hospitalsFindFirstArgs>(args?: SelectSubset<T, hospitalsFindFirstArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindFirstOrThrowArgs} args - Arguments to find a Hospitals
     * @example
     * // Get one Hospitals
     * const hospitals = await prisma.hospitals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hospitalsFindFirstOrThrowArgs>(args?: SelectSubset<T, hospitalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospitals.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospitals.findMany({ take: 10 })
     * 
     * // Only select the `id_rs`
     * const hospitalsWithId_rsOnly = await prisma.hospitals.findMany({ select: { id_rs: true } })
     * 
     */
    findMany<T extends hospitalsFindManyArgs>(args?: SelectSubset<T, hospitalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospitals.
     * @param {hospitalsCreateArgs} args - Arguments to create a Hospitals.
     * @example
     * // Create one Hospitals
     * const Hospitals = await prisma.hospitals.create({
     *   data: {
     *     // ... data to create a Hospitals
     *   }
     * })
     * 
     */
    create<T extends hospitalsCreateArgs>(args: SelectSubset<T, hospitalsCreateArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {hospitalsCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospitals = await prisma.hospitals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hospitalsCreateManyArgs>(args?: SelectSubset<T, hospitalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {hospitalsCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospitals = await prisma.hospitals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id_rs`
     * const hospitalsWithId_rsOnly = await prisma.hospitals.createManyAndReturn({
     *   select: { id_rs: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hospitalsCreateManyAndReturnArgs>(args?: SelectSubset<T, hospitalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospitals.
     * @param {hospitalsDeleteArgs} args - Arguments to delete one Hospitals.
     * @example
     * // Delete one Hospitals
     * const Hospitals = await prisma.hospitals.delete({
     *   where: {
     *     // ... filter to delete one Hospitals
     *   }
     * })
     * 
     */
    delete<T extends hospitalsDeleteArgs>(args: SelectSubset<T, hospitalsDeleteArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospitals.
     * @param {hospitalsUpdateArgs} args - Arguments to update one Hospitals.
     * @example
     * // Update one Hospitals
     * const hospitals = await prisma.hospitals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hospitalsUpdateArgs>(args: SelectSubset<T, hospitalsUpdateArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {hospitalsDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospitals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hospitalsDeleteManyArgs>(args?: SelectSubset<T, hospitalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospitals = await prisma.hospitals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hospitalsUpdateManyArgs>(args: SelectSubset<T, hospitalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {hospitalsUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospitals = await prisma.hospitals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id_rs`
     * const hospitalsWithId_rsOnly = await prisma.hospitals.updateManyAndReturn({
     *   select: { id_rs: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hospitalsUpdateManyAndReturnArgs>(args: SelectSubset<T, hospitalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospitals.
     * @param {hospitalsUpsertArgs} args - Arguments to update or create a Hospitals.
     * @example
     * // Update or create a Hospitals
     * const hospitals = await prisma.hospitals.upsert({
     *   create: {
     *     // ... data to create a Hospitals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospitals we want to update
     *   }
     * })
     */
    upsert<T extends hospitalsUpsertArgs>(args: SelectSubset<T, hospitalsUpsertArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospitals.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends hospitalsCountArgs>(
      args?: Subset<T, hospitalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalsAggregateArgs>(args: Subset<T, HospitalsAggregateArgs>): Prisma.PrismaPromise<GetHospitalsAggregateType<T>>

    /**
     * Group by Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hospitalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospitalsGroupByArgs['orderBy'] }
        : { orderBy?: hospitalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hospitalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hospitals model
   */
  readonly fields: hospitalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospitals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospitalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends hospitals$citiesArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$citiesArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provinces<T extends hospitals$provincesArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$provincesArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    practices<T extends hospitals$practicesArgs<ExtArgs> = {}>(args?: Subset<T, hospitals$practicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hospitals model
   */
  interface hospitalsFieldRefs {
    readonly id_rs: FieldRef<"hospitals", 'String'>
    readonly sandi_admin: FieldRef<"hospitals", 'String'>
    readonly nama_rs: FieldRef<"hospitals", 'String'>
    readonly tipe: FieldRef<"hospitals", 'tipe_enum'>
    readonly status: FieldRef<"hospitals", 'status_rs'>
    readonly deskripsi: FieldRef<"hospitals", 'String'>
    readonly foto: FieldRef<"hospitals", 'Bytes'>
    readonly alamat: FieldRef<"hospitals", 'String'>
    readonly kode_pos: FieldRef<"hospitals", 'String'>
    readonly latitude: FieldRef<"hospitals", 'Decimal'>
    readonly longitude: FieldRef<"hospitals", 'Decimal'>
    readonly create_at: FieldRef<"hospitals", 'DateTime'>
    readonly update_at: FieldRef<"hospitals", 'DateTime'>
    readonly id_kota: FieldRef<"hospitals", 'Int'>
    readonly id_prov: FieldRef<"hospitals", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hospitals findUnique
   */
  export type hospitalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals findUniqueOrThrow
   */
  export type hospitalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals findFirst
   */
  export type hospitalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals findFirstOrThrow
   */
  export type hospitalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals findMany
   */
  export type hospitalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hospitals.
     */
    cursor?: hospitalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     */
    skip?: number
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * hospitals create
   */
  export type hospitalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The data needed to create a hospitals.
     */
    data: XOR<hospitalsCreateInput, hospitalsUncheckedCreateInput>
  }

  /**
   * hospitals createMany
   */
  export type hospitalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospitals.
     */
    data: hospitalsCreateManyInput | hospitalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hospitals createManyAndReturn
   */
  export type hospitalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * The data used to create many hospitals.
     */
    data: hospitalsCreateManyInput | hospitalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hospitals update
   */
  export type hospitalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The data needed to update a hospitals.
     */
    data: XOR<hospitalsUpdateInput, hospitalsUncheckedUpdateInput>
    /**
     * Choose, which hospitals to update.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals updateMany
   */
  export type hospitalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyInput>
    /**
     * Filter which hospitals to update
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to update.
     */
    limit?: number
  }

  /**
   * hospitals updateManyAndReturn
   */
  export type hospitalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyInput>
    /**
     * Filter which hospitals to update
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hospitals upsert
   */
  export type hospitalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * The filter to search for the hospitals to update in case it exists.
     */
    where: hospitalsWhereUniqueInput
    /**
     * In case the hospitals found by the `where` argument doesn't exist, create a new hospitals with this data.
     */
    create: XOR<hospitalsCreateInput, hospitalsUncheckedCreateInput>
    /**
     * In case the hospitals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospitalsUpdateInput, hospitalsUncheckedUpdateInput>
  }

  /**
   * hospitals delete
   */
  export type hospitalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    /**
     * Filter which hospitals to delete.
     */
    where: hospitalsWhereUniqueInput
  }

  /**
   * hospitals deleteMany
   */
  export type hospitalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to delete
     */
    where?: hospitalsWhereInput
    /**
     * Limit how many hospitals to delete.
     */
    limit?: number
  }

  /**
   * hospitals.cities
   */
  export type hospitals$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
  }

  /**
   * hospitals.provinces
   */
  export type hospitals$provincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    where?: provincesWhereInput
  }

  /**
   * hospitals.practices
   */
  export type hospitals$practicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    where?: practicesWhereInput
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    cursor?: practicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * hospitals without action
   */
  export type hospitalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
  }


  /**
   * Model ml_booking
   */

  export type AggregateMl_booking = {
    _count: Ml_bookingCountAggregateOutputType | null
    _avg: Ml_bookingAvgAggregateOutputType | null
    _sum: Ml_bookingSumAggregateOutputType | null
    _min: Ml_bookingMinAggregateOutputType | null
    _max: Ml_bookingMaxAggregateOutputType | null
  }

  export type Ml_bookingAvgAggregateOutputType = {
    duration: number | null
  }

  export type Ml_bookingSumAggregateOutputType = {
    duration: number | null
  }

  export type Ml_bookingMinAggregateOutputType = {
    id: string | null
    id_rs: string | null
    lisensi: string | null
    id_sp: string | null
    hari: $Enums.hari_enum | null
    gejala: string | null
    start_consul: Date | null
    end_consul: Date | null
    duration: number | null
  }

  export type Ml_bookingMaxAggregateOutputType = {
    id: string | null
    id_rs: string | null
    lisensi: string | null
    id_sp: string | null
    hari: $Enums.hari_enum | null
    gejala: string | null
    start_consul: Date | null
    end_consul: Date | null
    duration: number | null
  }

  export type Ml_bookingCountAggregateOutputType = {
    id: number
    id_rs: number
    lisensi: number
    id_sp: number
    hari: number
    gejala: number
    start_consul: number
    end_consul: number
    duration: number
    _all: number
  }


  export type Ml_bookingAvgAggregateInputType = {
    duration?: true
  }

  export type Ml_bookingSumAggregateInputType = {
    duration?: true
  }

  export type Ml_bookingMinAggregateInputType = {
    id?: true
    id_rs?: true
    lisensi?: true
    id_sp?: true
    hari?: true
    gejala?: true
    start_consul?: true
    end_consul?: true
    duration?: true
  }

  export type Ml_bookingMaxAggregateInputType = {
    id?: true
    id_rs?: true
    lisensi?: true
    id_sp?: true
    hari?: true
    gejala?: true
    start_consul?: true
    end_consul?: true
    duration?: true
  }

  export type Ml_bookingCountAggregateInputType = {
    id?: true
    id_rs?: true
    lisensi?: true
    id_sp?: true
    hari?: true
    gejala?: true
    start_consul?: true
    end_consul?: true
    duration?: true
    _all?: true
  }

  export type Ml_bookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ml_booking to aggregate.
     */
    where?: ml_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ml_bookings to fetch.
     */
    orderBy?: ml_bookingOrderByWithRelationInput | ml_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ml_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ml_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ml_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ml_bookings
    **/
    _count?: true | Ml_bookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ml_bookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ml_bookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ml_bookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ml_bookingMaxAggregateInputType
  }

  export type GetMl_bookingAggregateType<T extends Ml_bookingAggregateArgs> = {
        [P in keyof T & keyof AggregateMl_booking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMl_booking[P]>
      : GetScalarType<T[P], AggregateMl_booking[P]>
  }




  export type ml_bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ml_bookingWhereInput
    orderBy?: ml_bookingOrderByWithAggregationInput | ml_bookingOrderByWithAggregationInput[]
    by: Ml_bookingScalarFieldEnum[] | Ml_bookingScalarFieldEnum
    having?: ml_bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ml_bookingCountAggregateInputType | true
    _avg?: Ml_bookingAvgAggregateInputType
    _sum?: Ml_bookingSumAggregateInputType
    _min?: Ml_bookingMinAggregateInputType
    _max?: Ml_bookingMaxAggregateInputType
  }

  export type Ml_bookingGroupByOutputType = {
    id: string
    id_rs: string | null
    lisensi: string | null
    id_sp: string | null
    hari: $Enums.hari_enum | null
    gejala: string | null
    start_consul: Date | null
    end_consul: Date | null
    duration: number | null
    _count: Ml_bookingCountAggregateOutputType | null
    _avg: Ml_bookingAvgAggregateOutputType | null
    _sum: Ml_bookingSumAggregateOutputType | null
    _min: Ml_bookingMinAggregateOutputType | null
    _max: Ml_bookingMaxAggregateOutputType | null
  }

  type GetMl_bookingGroupByPayload<T extends ml_bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ml_bookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ml_bookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ml_bookingGroupByOutputType[P]>
            : GetScalarType<T[P], Ml_bookingGroupByOutputType[P]>
        }
      >
    >


  export type ml_bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rs?: boolean
    lisensi?: boolean
    id_sp?: boolean
    hari?: boolean
    gejala?: boolean
    start_consul?: boolean
    end_consul?: boolean
    duration?: boolean
  }, ExtArgs["result"]["ml_booking"]>

  export type ml_bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rs?: boolean
    lisensi?: boolean
    id_sp?: boolean
    hari?: boolean
    gejala?: boolean
    start_consul?: boolean
    end_consul?: boolean
    duration?: boolean
  }, ExtArgs["result"]["ml_booking"]>

  export type ml_bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rs?: boolean
    lisensi?: boolean
    id_sp?: boolean
    hari?: boolean
    gejala?: boolean
    start_consul?: boolean
    end_consul?: boolean
    duration?: boolean
  }, ExtArgs["result"]["ml_booking"]>

  export type ml_bookingSelectScalar = {
    id?: boolean
    id_rs?: boolean
    lisensi?: boolean
    id_sp?: boolean
    hari?: boolean
    gejala?: boolean
    start_consul?: boolean
    end_consul?: boolean
    duration?: boolean
  }

  export type ml_bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_rs" | "lisensi" | "id_sp" | "hari" | "gejala" | "start_consul" | "end_consul" | "duration", ExtArgs["result"]["ml_booking"]>

  export type $ml_bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ml_booking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_rs: string | null
      lisensi: string | null
      id_sp: string | null
      hari: $Enums.hari_enum | null
      gejala: string | null
      start_consul: Date | null
      end_consul: Date | null
      duration: number | null
    }, ExtArgs["result"]["ml_booking"]>
    composites: {}
  }

  type ml_bookingGetPayload<S extends boolean | null | undefined | ml_bookingDefaultArgs> = $Result.GetResult<Prisma.$ml_bookingPayload, S>

  type ml_bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ml_bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ml_bookingCountAggregateInputType | true
    }

  export interface ml_bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ml_booking'], meta: { name: 'ml_booking' } }
    /**
     * Find zero or one Ml_booking that matches the filter.
     * @param {ml_bookingFindUniqueArgs} args - Arguments to find a Ml_booking
     * @example
     * // Get one Ml_booking
     * const ml_booking = await prisma.ml_booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ml_bookingFindUniqueArgs>(args: SelectSubset<T, ml_bookingFindUniqueArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ml_booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ml_bookingFindUniqueOrThrowArgs} args - Arguments to find a Ml_booking
     * @example
     * // Get one Ml_booking
     * const ml_booking = await prisma.ml_booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ml_bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, ml_bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ml_booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingFindFirstArgs} args - Arguments to find a Ml_booking
     * @example
     * // Get one Ml_booking
     * const ml_booking = await prisma.ml_booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ml_bookingFindFirstArgs>(args?: SelectSubset<T, ml_bookingFindFirstArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ml_booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingFindFirstOrThrowArgs} args - Arguments to find a Ml_booking
     * @example
     * // Get one Ml_booking
     * const ml_booking = await prisma.ml_booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ml_bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, ml_bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ml_bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ml_bookings
     * const ml_bookings = await prisma.ml_booking.findMany()
     * 
     * // Get first 10 Ml_bookings
     * const ml_bookings = await prisma.ml_booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ml_bookingWithIdOnly = await prisma.ml_booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ml_bookingFindManyArgs>(args?: SelectSubset<T, ml_bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ml_booking.
     * @param {ml_bookingCreateArgs} args - Arguments to create a Ml_booking.
     * @example
     * // Create one Ml_booking
     * const Ml_booking = await prisma.ml_booking.create({
     *   data: {
     *     // ... data to create a Ml_booking
     *   }
     * })
     * 
     */
    create<T extends ml_bookingCreateArgs>(args: SelectSubset<T, ml_bookingCreateArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ml_bookings.
     * @param {ml_bookingCreateManyArgs} args - Arguments to create many Ml_bookings.
     * @example
     * // Create many Ml_bookings
     * const ml_booking = await prisma.ml_booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ml_bookingCreateManyArgs>(args?: SelectSubset<T, ml_bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ml_bookings and returns the data saved in the database.
     * @param {ml_bookingCreateManyAndReturnArgs} args - Arguments to create many Ml_bookings.
     * @example
     * // Create many Ml_bookings
     * const ml_booking = await prisma.ml_booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ml_bookings and only return the `id`
     * const ml_bookingWithIdOnly = await prisma.ml_booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ml_bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, ml_bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ml_booking.
     * @param {ml_bookingDeleteArgs} args - Arguments to delete one Ml_booking.
     * @example
     * // Delete one Ml_booking
     * const Ml_booking = await prisma.ml_booking.delete({
     *   where: {
     *     // ... filter to delete one Ml_booking
     *   }
     * })
     * 
     */
    delete<T extends ml_bookingDeleteArgs>(args: SelectSubset<T, ml_bookingDeleteArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ml_booking.
     * @param {ml_bookingUpdateArgs} args - Arguments to update one Ml_booking.
     * @example
     * // Update one Ml_booking
     * const ml_booking = await prisma.ml_booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ml_bookingUpdateArgs>(args: SelectSubset<T, ml_bookingUpdateArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ml_bookings.
     * @param {ml_bookingDeleteManyArgs} args - Arguments to filter Ml_bookings to delete.
     * @example
     * // Delete a few Ml_bookings
     * const { count } = await prisma.ml_booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ml_bookingDeleteManyArgs>(args?: SelectSubset<T, ml_bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ml_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ml_bookings
     * const ml_booking = await prisma.ml_booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ml_bookingUpdateManyArgs>(args: SelectSubset<T, ml_bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ml_bookings and returns the data updated in the database.
     * @param {ml_bookingUpdateManyAndReturnArgs} args - Arguments to update many Ml_bookings.
     * @example
     * // Update many Ml_bookings
     * const ml_booking = await prisma.ml_booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ml_bookings and only return the `id`
     * const ml_bookingWithIdOnly = await prisma.ml_booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ml_bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, ml_bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ml_booking.
     * @param {ml_bookingUpsertArgs} args - Arguments to update or create a Ml_booking.
     * @example
     * // Update or create a Ml_booking
     * const ml_booking = await prisma.ml_booking.upsert({
     *   create: {
     *     // ... data to create a Ml_booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ml_booking we want to update
     *   }
     * })
     */
    upsert<T extends ml_bookingUpsertArgs>(args: SelectSubset<T, ml_bookingUpsertArgs<ExtArgs>>): Prisma__ml_bookingClient<$Result.GetResult<Prisma.$ml_bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ml_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingCountArgs} args - Arguments to filter Ml_bookings to count.
     * @example
     * // Count the number of Ml_bookings
     * const count = await prisma.ml_booking.count({
     *   where: {
     *     // ... the filter for the Ml_bookings we want to count
     *   }
     * })
    **/
    count<T extends ml_bookingCountArgs>(
      args?: Subset<T, ml_bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ml_bookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ml_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ml_bookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ml_bookingAggregateArgs>(args: Subset<T, Ml_bookingAggregateArgs>): Prisma.PrismaPromise<GetMl_bookingAggregateType<T>>

    /**
     * Group by Ml_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ml_bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ml_bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ml_bookingGroupByArgs['orderBy'] }
        : { orderBy?: ml_bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ml_bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMl_bookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ml_booking model
   */
  readonly fields: ml_bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ml_booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ml_bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ml_booking model
   */
  interface ml_bookingFieldRefs {
    readonly id: FieldRef<"ml_booking", 'String'>
    readonly id_rs: FieldRef<"ml_booking", 'String'>
    readonly lisensi: FieldRef<"ml_booking", 'String'>
    readonly id_sp: FieldRef<"ml_booking", 'String'>
    readonly hari: FieldRef<"ml_booking", 'hari_enum'>
    readonly gejala: FieldRef<"ml_booking", 'String'>
    readonly start_consul: FieldRef<"ml_booking", 'DateTime'>
    readonly end_consul: FieldRef<"ml_booking", 'DateTime'>
    readonly duration: FieldRef<"ml_booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ml_booking findUnique
   */
  export type ml_bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter, which ml_booking to fetch.
     */
    where: ml_bookingWhereUniqueInput
  }

  /**
   * ml_booking findUniqueOrThrow
   */
  export type ml_bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter, which ml_booking to fetch.
     */
    where: ml_bookingWhereUniqueInput
  }

  /**
   * ml_booking findFirst
   */
  export type ml_bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter, which ml_booking to fetch.
     */
    where?: ml_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ml_bookings to fetch.
     */
    orderBy?: ml_bookingOrderByWithRelationInput | ml_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ml_bookings.
     */
    cursor?: ml_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ml_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ml_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ml_bookings.
     */
    distinct?: Ml_bookingScalarFieldEnum | Ml_bookingScalarFieldEnum[]
  }

  /**
   * ml_booking findFirstOrThrow
   */
  export type ml_bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter, which ml_booking to fetch.
     */
    where?: ml_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ml_bookings to fetch.
     */
    orderBy?: ml_bookingOrderByWithRelationInput | ml_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ml_bookings.
     */
    cursor?: ml_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ml_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ml_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ml_bookings.
     */
    distinct?: Ml_bookingScalarFieldEnum | Ml_bookingScalarFieldEnum[]
  }

  /**
   * ml_booking findMany
   */
  export type ml_bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter, which ml_bookings to fetch.
     */
    where?: ml_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ml_bookings to fetch.
     */
    orderBy?: ml_bookingOrderByWithRelationInput | ml_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ml_bookings.
     */
    cursor?: ml_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ml_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ml_bookings.
     */
    skip?: number
    distinct?: Ml_bookingScalarFieldEnum | Ml_bookingScalarFieldEnum[]
  }

  /**
   * ml_booking create
   */
  export type ml_bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * The data needed to create a ml_booking.
     */
    data: XOR<ml_bookingCreateInput, ml_bookingUncheckedCreateInput>
  }

  /**
   * ml_booking createMany
   */
  export type ml_bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ml_bookings.
     */
    data: ml_bookingCreateManyInput | ml_bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ml_booking createManyAndReturn
   */
  export type ml_bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * The data used to create many ml_bookings.
     */
    data: ml_bookingCreateManyInput | ml_bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ml_booking update
   */
  export type ml_bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * The data needed to update a ml_booking.
     */
    data: XOR<ml_bookingUpdateInput, ml_bookingUncheckedUpdateInput>
    /**
     * Choose, which ml_booking to update.
     */
    where: ml_bookingWhereUniqueInput
  }

  /**
   * ml_booking updateMany
   */
  export type ml_bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ml_bookings.
     */
    data: XOR<ml_bookingUpdateManyMutationInput, ml_bookingUncheckedUpdateManyInput>
    /**
     * Filter which ml_bookings to update
     */
    where?: ml_bookingWhereInput
    /**
     * Limit how many ml_bookings to update.
     */
    limit?: number
  }

  /**
   * ml_booking updateManyAndReturn
   */
  export type ml_bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * The data used to update ml_bookings.
     */
    data: XOR<ml_bookingUpdateManyMutationInput, ml_bookingUncheckedUpdateManyInput>
    /**
     * Filter which ml_bookings to update
     */
    where?: ml_bookingWhereInput
    /**
     * Limit how many ml_bookings to update.
     */
    limit?: number
  }

  /**
   * ml_booking upsert
   */
  export type ml_bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * The filter to search for the ml_booking to update in case it exists.
     */
    where: ml_bookingWhereUniqueInput
    /**
     * In case the ml_booking found by the `where` argument doesn't exist, create a new ml_booking with this data.
     */
    create: XOR<ml_bookingCreateInput, ml_bookingUncheckedCreateInput>
    /**
     * In case the ml_booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ml_bookingUpdateInput, ml_bookingUncheckedUpdateInput>
  }

  /**
   * ml_booking delete
   */
  export type ml_bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
    /**
     * Filter which ml_booking to delete.
     */
    where: ml_bookingWhereUniqueInput
  }

  /**
   * ml_booking deleteMany
   */
  export type ml_bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ml_bookings to delete
     */
    where?: ml_bookingWhereInput
    /**
     * Limit how many ml_bookings to delete.
     */
    limit?: number
  }

  /**
   * ml_booking without action
   */
  export type ml_bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ml_booking
     */
    select?: ml_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ml_booking
     */
    omit?: ml_bookingOmit<ExtArgs> | null
  }


  /**
   * Model practices
   */

  export type AggregatePractices = {
    _count: PracticesCountAggregateOutputType | null
    _min: PracticesMinAggregateOutputType | null
    _max: PracticesMaxAggregateOutputType | null
  }

  export type PracticesMinAggregateOutputType = {
    id_prak: string | null
    id_rs: string | null
    id_sp: string | null
    lisensi: string | null
    id_sched: string | null
  }

  export type PracticesMaxAggregateOutputType = {
    id_prak: string | null
    id_rs: string | null
    id_sp: string | null
    lisensi: string | null
    id_sched: string | null
  }

  export type PracticesCountAggregateOutputType = {
    id_prak: number
    id_rs: number
    id_sp: number
    lisensi: number
    id_sched: number
    _all: number
  }


  export type PracticesMinAggregateInputType = {
    id_prak?: true
    id_rs?: true
    id_sp?: true
    lisensi?: true
    id_sched?: true
  }

  export type PracticesMaxAggregateInputType = {
    id_prak?: true
    id_rs?: true
    id_sp?: true
    lisensi?: true
    id_sched?: true
  }

  export type PracticesCountAggregateInputType = {
    id_prak?: true
    id_rs?: true
    id_sp?: true
    lisensi?: true
    id_sched?: true
    _all?: true
  }

  export type PracticesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practices to aggregate.
     */
    where?: practicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practices to fetch.
     */
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: practicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned practices
    **/
    _count?: true | PracticesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticesMaxAggregateInputType
  }

  export type GetPracticesAggregateType<T extends PracticesAggregateArgs> = {
        [P in keyof T & keyof AggregatePractices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePractices[P]>
      : GetScalarType<T[P], AggregatePractices[P]>
  }




  export type practicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicesWhereInput
    orderBy?: practicesOrderByWithAggregationInput | practicesOrderByWithAggregationInput[]
    by: PracticesScalarFieldEnum[] | PracticesScalarFieldEnum
    having?: practicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticesCountAggregateInputType | true
    _min?: PracticesMinAggregateInputType
    _max?: PracticesMaxAggregateInputType
  }

  export type PracticesGroupByOutputType = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
    id_sched: string
    _count: PracticesCountAggregateOutputType | null
    _min: PracticesMinAggregateOutputType | null
    _max: PracticesMaxAggregateOutputType | null
  }

  type GetPracticesGroupByPayload<T extends practicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticesGroupByOutputType[P]>
            : GetScalarType<T[P], PracticesGroupByOutputType[P]>
        }
      >
    >


  export type practicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prak?: boolean
    id_rs?: boolean
    id_sp?: boolean
    lisensi?: boolean
    id_sched?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    slot?: boolean | practices$slotArgs<ExtArgs>
    _count?: boolean | PracticesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practices"]>

  export type practicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prak?: boolean
    id_rs?: boolean
    id_sp?: boolean
    lisensi?: boolean
    id_sched?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practices"]>

  export type practicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prak?: boolean
    id_rs?: boolean
    id_sp?: boolean
    lisensi?: boolean
    id_sched?: boolean
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practices"]>

  export type practicesSelectScalar = {
    id_prak?: boolean
    id_rs?: boolean
    id_sp?: boolean
    lisensi?: boolean
    id_sched?: boolean
  }

  export type practicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prak" | "id_rs" | "id_sp" | "lisensi" | "id_sched", ExtArgs["result"]["practices"]>
  export type practicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
    slot?: boolean | practices$slotArgs<ExtArgs>
    _count?: boolean | PracticesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type practicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }
  export type practicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitals?: boolean | hospitalsDefaultArgs<ExtArgs>
    schedules?: boolean | schedulesDefaultArgs<ExtArgs>
    specialists?: boolean | specialistsDefaultArgs<ExtArgs>
    doctors?: boolean | doctorsDefaultArgs<ExtArgs>
  }

  export type $practicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "practices"
    objects: {
      hospitals: Prisma.$hospitalsPayload<ExtArgs>
      schedules: Prisma.$schedulesPayload<ExtArgs>
      specialists: Prisma.$specialistsPayload<ExtArgs>
      doctors: Prisma.$doctorsPayload<ExtArgs>
      slot: Prisma.$slotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prak: string
      id_rs: string
      id_sp: string
      lisensi: string
      id_sched: string
    }, ExtArgs["result"]["practices"]>
    composites: {}
  }

  type practicesGetPayload<S extends boolean | null | undefined | practicesDefaultArgs> = $Result.GetResult<Prisma.$practicesPayload, S>

  type practicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<practicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticesCountAggregateInputType | true
    }

  export interface practicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['practices'], meta: { name: 'practices' } }
    /**
     * Find zero or one Practices that matches the filter.
     * @param {practicesFindUniqueArgs} args - Arguments to find a Practices
     * @example
     * // Get one Practices
     * const practices = await prisma.practices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends practicesFindUniqueArgs>(args: SelectSubset<T, practicesFindUniqueArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Practices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {practicesFindUniqueOrThrowArgs} args - Arguments to find a Practices
     * @example
     * // Get one Practices
     * const practices = await prisma.practices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends practicesFindUniqueOrThrowArgs>(args: SelectSubset<T, practicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Practices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesFindFirstArgs} args - Arguments to find a Practices
     * @example
     * // Get one Practices
     * const practices = await prisma.practices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends practicesFindFirstArgs>(args?: SelectSubset<T, practicesFindFirstArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Practices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesFindFirstOrThrowArgs} args - Arguments to find a Practices
     * @example
     * // Get one Practices
     * const practices = await prisma.practices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends practicesFindFirstOrThrowArgs>(args?: SelectSubset<T, practicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Practices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Practices
     * const practices = await prisma.practices.findMany()
     * 
     * // Get first 10 Practices
     * const practices = await prisma.practices.findMany({ take: 10 })
     * 
     * // Only select the `id_prak`
     * const practicesWithId_prakOnly = await prisma.practices.findMany({ select: { id_prak: true } })
     * 
     */
    findMany<T extends practicesFindManyArgs>(args?: SelectSubset<T, practicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Practices.
     * @param {practicesCreateArgs} args - Arguments to create a Practices.
     * @example
     * // Create one Practices
     * const Practices = await prisma.practices.create({
     *   data: {
     *     // ... data to create a Practices
     *   }
     * })
     * 
     */
    create<T extends practicesCreateArgs>(args: SelectSubset<T, practicesCreateArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Practices.
     * @param {practicesCreateManyArgs} args - Arguments to create many Practices.
     * @example
     * // Create many Practices
     * const practices = await prisma.practices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends practicesCreateManyArgs>(args?: SelectSubset<T, practicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Practices and returns the data saved in the database.
     * @param {practicesCreateManyAndReturnArgs} args - Arguments to create many Practices.
     * @example
     * // Create many Practices
     * const practices = await prisma.practices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Practices and only return the `id_prak`
     * const practicesWithId_prakOnly = await prisma.practices.createManyAndReturn({
     *   select: { id_prak: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends practicesCreateManyAndReturnArgs>(args?: SelectSubset<T, practicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Practices.
     * @param {practicesDeleteArgs} args - Arguments to delete one Practices.
     * @example
     * // Delete one Practices
     * const Practices = await prisma.practices.delete({
     *   where: {
     *     // ... filter to delete one Practices
     *   }
     * })
     * 
     */
    delete<T extends practicesDeleteArgs>(args: SelectSubset<T, practicesDeleteArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Practices.
     * @param {practicesUpdateArgs} args - Arguments to update one Practices.
     * @example
     * // Update one Practices
     * const practices = await prisma.practices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends practicesUpdateArgs>(args: SelectSubset<T, practicesUpdateArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Practices.
     * @param {practicesDeleteManyArgs} args - Arguments to filter Practices to delete.
     * @example
     * // Delete a few Practices
     * const { count } = await prisma.practices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends practicesDeleteManyArgs>(args?: SelectSubset<T, practicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Practices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Practices
     * const practices = await prisma.practices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends practicesUpdateManyArgs>(args: SelectSubset<T, practicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Practices and returns the data updated in the database.
     * @param {practicesUpdateManyAndReturnArgs} args - Arguments to update many Practices.
     * @example
     * // Update many Practices
     * const practices = await prisma.practices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Practices and only return the `id_prak`
     * const practicesWithId_prakOnly = await prisma.practices.updateManyAndReturn({
     *   select: { id_prak: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends practicesUpdateManyAndReturnArgs>(args: SelectSubset<T, practicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Practices.
     * @param {practicesUpsertArgs} args - Arguments to update or create a Practices.
     * @example
     * // Update or create a Practices
     * const practices = await prisma.practices.upsert({
     *   create: {
     *     // ... data to create a Practices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Practices we want to update
     *   }
     * })
     */
    upsert<T extends practicesUpsertArgs>(args: SelectSubset<T, practicesUpsertArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Practices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesCountArgs} args - Arguments to filter Practices to count.
     * @example
     * // Count the number of Practices
     * const count = await prisma.practices.count({
     *   where: {
     *     // ... the filter for the Practices we want to count
     *   }
     * })
    **/
    count<T extends practicesCountArgs>(
      args?: Subset<T, practicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Practices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PracticesAggregateArgs>(args: Subset<T, PracticesAggregateArgs>): Prisma.PrismaPromise<GetPracticesAggregateType<T>>

    /**
     * Group by Practices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends practicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: practicesGroupByArgs['orderBy'] }
        : { orderBy?: practicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, practicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the practices model
   */
  readonly fields: practicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for practices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__practicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospitals<T extends hospitalsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalsDefaultArgs<ExtArgs>>): Prisma__hospitalsClient<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends schedulesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schedulesDefaultArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialists<T extends specialistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specialistsDefaultArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctors<T extends doctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorsDefaultArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends practices$slotArgs<ExtArgs> = {}>(args?: Subset<T, practices$slotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the practices model
   */
  interface practicesFieldRefs {
    readonly id_prak: FieldRef<"practices", 'String'>
    readonly id_rs: FieldRef<"practices", 'String'>
    readonly id_sp: FieldRef<"practices", 'String'>
    readonly lisensi: FieldRef<"practices", 'String'>
    readonly id_sched: FieldRef<"practices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * practices findUnique
   */
  export type practicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter, which practices to fetch.
     */
    where: practicesWhereUniqueInput
  }

  /**
   * practices findUniqueOrThrow
   */
  export type practicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter, which practices to fetch.
     */
    where: practicesWhereUniqueInput
  }

  /**
   * practices findFirst
   */
  export type practicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter, which practices to fetch.
     */
    where?: practicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practices to fetch.
     */
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practices.
     */
    cursor?: practicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practices.
     */
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * practices findFirstOrThrow
   */
  export type practicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter, which practices to fetch.
     */
    where?: practicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practices to fetch.
     */
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practices.
     */
    cursor?: practicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practices.
     */
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * practices findMany
   */
  export type practicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter, which practices to fetch.
     */
    where?: practicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practices to fetch.
     */
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing practices.
     */
    cursor?: practicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practices.
     */
    skip?: number
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * practices create
   */
  export type practicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * The data needed to create a practices.
     */
    data: XOR<practicesCreateInput, practicesUncheckedCreateInput>
  }

  /**
   * practices createMany
   */
  export type practicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many practices.
     */
    data: practicesCreateManyInput | practicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * practices createManyAndReturn
   */
  export type practicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * The data used to create many practices.
     */
    data: practicesCreateManyInput | practicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * practices update
   */
  export type practicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * The data needed to update a practices.
     */
    data: XOR<practicesUpdateInput, practicesUncheckedUpdateInput>
    /**
     * Choose, which practices to update.
     */
    where: practicesWhereUniqueInput
  }

  /**
   * practices updateMany
   */
  export type practicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update practices.
     */
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyInput>
    /**
     * Filter which practices to update
     */
    where?: practicesWhereInput
    /**
     * Limit how many practices to update.
     */
    limit?: number
  }

  /**
   * practices updateManyAndReturn
   */
  export type practicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * The data used to update practices.
     */
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyInput>
    /**
     * Filter which practices to update
     */
    where?: practicesWhereInput
    /**
     * Limit how many practices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * practices upsert
   */
  export type practicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * The filter to search for the practices to update in case it exists.
     */
    where: practicesWhereUniqueInput
    /**
     * In case the practices found by the `where` argument doesn't exist, create a new practices with this data.
     */
    create: XOR<practicesCreateInput, practicesUncheckedCreateInput>
    /**
     * In case the practices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<practicesUpdateInput, practicesUncheckedUpdateInput>
  }

  /**
   * practices delete
   */
  export type practicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    /**
     * Filter which practices to delete.
     */
    where: practicesWhereUniqueInput
  }

  /**
   * practices deleteMany
   */
  export type practicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practices to delete
     */
    where?: practicesWhereInput
    /**
     * Limit how many practices to delete.
     */
    limit?: number
  }

  /**
   * practices.slot
   */
  export type practices$slotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    where?: slotWhereInput
    orderBy?: slotOrderByWithRelationInput | slotOrderByWithRelationInput[]
    cursor?: slotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * practices without action
   */
  export type practicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
  }


  /**
   * Model schedules
   */

  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesMinAggregateOutputType = {
    id_sched: string | null
    hari: $Enums.hari_enum | null
    start_session: string | null
    end_session: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type SchedulesMaxAggregateOutputType = {
    id_sched: string | null
    hari: $Enums.hari_enum | null
    start_session: string | null
    end_session: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type SchedulesCountAggregateOutputType = {
    id_sched: number
    hari: number
    start_session: number
    end_session: number
    create_at: number
    update_at: number
    _all: number
  }


  export type SchedulesMinAggregateInputType = {
    id_sched?: true
    hari?: true
    start_session?: true
    end_session?: true
    create_at?: true
    update_at?: true
  }

  export type SchedulesMaxAggregateInputType = {
    id_sched?: true
    hari?: true
    start_session?: true
    end_session?: true
    create_at?: true
    update_at?: true
  }

  export type SchedulesCountAggregateInputType = {
    id_sched?: true
    hari?: true
    start_session?: true
    end_session?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to aggregate.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type schedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
    orderBy?: schedulesOrderByWithAggregationInput | schedulesOrderByWithAggregationInput[]
    by: SchedulesScalarFieldEnum[] | SchedulesScalarFieldEnum
    having?: schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }

  export type SchedulesGroupByOutputType = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at: Date | null
    update_at: Date | null
    _count: SchedulesCountAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends schedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type schedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sched?: boolean
    hari?: boolean
    start_session?: boolean
    end_session?: boolean
    create_at?: boolean
    update_at?: boolean
    practices?: boolean | schedules$practicesArgs<ExtArgs>
    _count?: boolean | SchedulesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sched?: boolean
    hari?: boolean
    start_session?: boolean
    end_session?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sched?: boolean
    hari?: boolean
    start_session?: boolean
    end_session?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectScalar = {
    id_sched?: boolean
    hari?: boolean
    start_session?: boolean
    end_session?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type schedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sched" | "hari" | "start_session" | "end_session" | "create_at" | "update_at", ExtArgs["result"]["schedules"]>
  export type schedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practices?: boolean | schedules$practicesArgs<ExtArgs>
    _count?: boolean | SchedulesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type schedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type schedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $schedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedules"
    objects: {
      practices: Prisma.$practicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sched: string
      hari: $Enums.hari_enum
      start_session: string
      end_session: string
      create_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["schedules"]>
    composites: {}
  }

  type schedulesGetPayload<S extends boolean | null | undefined | schedulesDefaultArgs> = $Result.GetResult<Prisma.$schedulesPayload, S>

  type schedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface schedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedules'], meta: { name: 'schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {schedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schedulesFindUniqueArgs>(args: SelectSubset<T, schedulesFindUniqueArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schedulesFindFirstArgs>(args?: SelectSubset<T, schedulesFindFirstArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `id_sched`
     * const schedulesWithId_schedOnly = await prisma.schedules.findMany({ select: { id_sched: true } })
     * 
     */
    findMany<T extends schedulesFindManyArgs>(args?: SelectSubset<T, schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedules.
     * @param {schedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
     */
    create<T extends schedulesCreateArgs>(args: SelectSubset<T, schedulesCreateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {schedulesCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schedulesCreateManyArgs>(args?: SelectSubset<T, schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {schedulesCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedules = await prisma.schedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id_sched`
     * const schedulesWithId_schedOnly = await prisma.schedules.createManyAndReturn({
     *   select: { id_sched: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, schedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedules.
     * @param {schedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
     */
    delete<T extends schedulesDeleteArgs>(args: SelectSubset<T, schedulesDeleteArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedules.
     * @param {schedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schedulesUpdateArgs>(args: SelectSubset<T, schedulesUpdateArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {schedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schedulesDeleteManyArgs>(args?: SelectSubset<T, schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schedulesUpdateManyArgs>(args: SelectSubset<T, schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {schedulesUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id_sched`
     * const schedulesWithId_schedOnly = await prisma.schedules.updateManyAndReturn({
     *   select: { id_sched: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends schedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, schedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedules.
     * @param {schedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
     */
    upsert<T extends schedulesUpsertArgs>(args: SelectSubset<T, schedulesUpsertArgs<ExtArgs>>): Prisma__schedulesClient<$Result.GetResult<Prisma.$schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends schedulesCountArgs>(
      args?: Subset<T, schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends schedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schedulesGroupByArgs['orderBy'] }
        : { orderBy?: schedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedules model
   */
  readonly fields: schedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practices<T extends schedules$practicesArgs<ExtArgs> = {}>(args?: Subset<T, schedules$practicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedules model
   */
  interface schedulesFieldRefs {
    readonly id_sched: FieldRef<"schedules", 'String'>
    readonly hari: FieldRef<"schedules", 'hari_enum'>
    readonly start_session: FieldRef<"schedules", 'String'>
    readonly end_session: FieldRef<"schedules", 'String'>
    readonly create_at: FieldRef<"schedules", 'DateTime'>
    readonly update_at: FieldRef<"schedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schedules findUnique
   */
  export type schedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findUniqueOrThrow
   */
  export type schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findFirst
   */
  export type schedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findFirstOrThrow
   */
  export type schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules findMany
   */
  export type schedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: schedulesOrderByWithRelationInput | schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: SchedulesScalarFieldEnum | SchedulesScalarFieldEnum[]
  }

  /**
   * schedules create
   */
  export type schedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a schedules.
     */
    data: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
  }

  /**
   * schedules createMany
   */
  export type schedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedules createManyAndReturn
   */
  export type schedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: schedulesCreateManyInput | schedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedules update
   */
  export type schedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a schedules.
     */
    data: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
    /**
     * Choose, which schedules to update.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules updateMany
   */
  export type schedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedules updateManyAndReturn
   */
  export type schedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedules upsert
   */
  export type schedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the schedules to update in case it exists.
     */
    where: schedulesWhereUniqueInput
    /**
     * In case the schedules found by the `where` argument doesn't exist, create a new schedules with this data.
     */
    create: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
    /**
     * In case the schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
  }

  /**
   * schedules delete
   */
  export type schedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter which schedules to delete.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules deleteMany
   */
  export type schedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: schedulesWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedules.practices
   */
  export type schedules$practicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    where?: practicesWhereInput
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    cursor?: practicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * schedules without action
   */
  export type schedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedules
     */
    omit?: schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schedulesInclude<ExtArgs> | null
  }


  /**
   * Model slot
   */

  export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  export type SlotAvgAggregateOutputType = {
    total: number | null
    sisa: number | null
  }

  export type SlotSumAggregateOutputType = {
    total: number | null
    sisa: number | null
  }

  export type SlotMinAggregateOutputType = {
    id_slot: string | null
    tanggal: Date | null
    total: number | null
    sisa: number | null
    create_at: Date | null
    update_at: Date | null
    id_prak: string | null
  }

  export type SlotMaxAggregateOutputType = {
    id_slot: string | null
    tanggal: Date | null
    total: number | null
    sisa: number | null
    create_at: Date | null
    update_at: Date | null
    id_prak: string | null
  }

  export type SlotCountAggregateOutputType = {
    id_slot: number
    tanggal: number
    total: number
    sisa: number
    create_at: number
    update_at: number
    id_prak: number
    _all: number
  }


  export type SlotAvgAggregateInputType = {
    total?: true
    sisa?: true
  }

  export type SlotSumAggregateInputType = {
    total?: true
    sisa?: true
  }

  export type SlotMinAggregateInputType = {
    id_slot?: true
    tanggal?: true
    total?: true
    sisa?: true
    create_at?: true
    update_at?: true
    id_prak?: true
  }

  export type SlotMaxAggregateInputType = {
    id_slot?: true
    tanggal?: true
    total?: true
    sisa?: true
    create_at?: true
    update_at?: true
    id_prak?: true
  }

  export type SlotCountAggregateInputType = {
    id_slot?: true
    tanggal?: true
    total?: true
    sisa?: true
    create_at?: true
    update_at?: true
    id_prak?: true
    _all?: true
  }

  export type SlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which slot to aggregate.
     */
    where?: slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of slots to fetch.
     */
    orderBy?: slotOrderByWithRelationInput | slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned slots
    **/
    _count?: true | SlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotMaxAggregateInputType
  }

  export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
        [P in keyof T & keyof AggregateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlot[P]>
      : GetScalarType<T[P], AggregateSlot[P]>
  }




  export type slotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: slotWhereInput
    orderBy?: slotOrderByWithAggregationInput | slotOrderByWithAggregationInput[]
    by: SlotScalarFieldEnum[] | SlotScalarFieldEnum
    having?: slotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotCountAggregateInputType | true
    _avg?: SlotAvgAggregateInputType
    _sum?: SlotSumAggregateInputType
    _min?: SlotMinAggregateInputType
    _max?: SlotMaxAggregateInputType
  }

  export type SlotGroupByOutputType = {
    id_slot: string
    tanggal: Date | null
    total: number | null
    sisa: number | null
    create_at: Date | null
    update_at: Date | null
    id_prak: string | null
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  type GetSlotGroupByPayload<T extends slotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotGroupByOutputType[P]>
            : GetScalarType<T[P], SlotGroupByOutputType[P]>
        }
      >
    >


  export type slotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_slot?: boolean
    tanggal?: boolean
    total?: boolean
    sisa?: boolean
    create_at?: boolean
    update_at?: boolean
    id_prak?: boolean
    bookings?: boolean | slot$bookingsArgs<ExtArgs>
    practices?: boolean | slot$practicesArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type slotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_slot?: boolean
    tanggal?: boolean
    total?: boolean
    sisa?: boolean
    create_at?: boolean
    update_at?: boolean
    id_prak?: boolean
    practices?: boolean | slot$practicesArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type slotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_slot?: boolean
    tanggal?: boolean
    total?: boolean
    sisa?: boolean
    create_at?: boolean
    update_at?: boolean
    id_prak?: boolean
    practices?: boolean | slot$practicesArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type slotSelectScalar = {
    id_slot?: boolean
    tanggal?: boolean
    total?: boolean
    sisa?: boolean
    create_at?: boolean
    update_at?: boolean
    id_prak?: boolean
  }

  export type slotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_slot" | "tanggal" | "total" | "sisa" | "create_at" | "update_at" | "id_prak", ExtArgs["result"]["slot"]>
  export type slotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | slot$bookingsArgs<ExtArgs>
    practices?: boolean | slot$practicesArgs<ExtArgs>
    _count?: boolean | SlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type slotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practices?: boolean | slot$practicesArgs<ExtArgs>
  }
  export type slotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practices?: boolean | slot$practicesArgs<ExtArgs>
  }

  export type $slotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "slot"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      practices: Prisma.$practicesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_slot: string
      tanggal: Date | null
      total: number | null
      sisa: number | null
      create_at: Date | null
      update_at: Date | null
      id_prak: string | null
    }, ExtArgs["result"]["slot"]>
    composites: {}
  }

  type slotGetPayload<S extends boolean | null | undefined | slotDefaultArgs> = $Result.GetResult<Prisma.$slotPayload, S>

  type slotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<slotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotCountAggregateInputType | true
    }

  export interface slotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['slot'], meta: { name: 'slot' } }
    /**
     * Find zero or one Slot that matches the filter.
     * @param {slotFindUniqueArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends slotFindUniqueArgs>(args: SelectSubset<T, slotFindUniqueArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {slotFindUniqueOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends slotFindUniqueOrThrowArgs>(args: SelectSubset<T, slotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotFindFirstArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends slotFindFirstArgs>(args?: SelectSubset<T, slotFindFirstArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotFindFirstOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends slotFindFirstOrThrowArgs>(args?: SelectSubset<T, slotFindFirstOrThrowArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slot.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slot.findMany({ take: 10 })
     * 
     * // Only select the `id_slot`
     * const slotWithId_slotOnly = await prisma.slot.findMany({ select: { id_slot: true } })
     * 
     */
    findMany<T extends slotFindManyArgs>(args?: SelectSubset<T, slotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slot.
     * @param {slotCreateArgs} args - Arguments to create a Slot.
     * @example
     * // Create one Slot
     * const Slot = await prisma.slot.create({
     *   data: {
     *     // ... data to create a Slot
     *   }
     * })
     * 
     */
    create<T extends slotCreateArgs>(args: SelectSubset<T, slotCreateArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slots.
     * @param {slotCreateManyArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends slotCreateManyArgs>(args?: SelectSubset<T, slotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slots and returns the data saved in the database.
     * @param {slotCreateManyAndReturnArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slots and only return the `id_slot`
     * const slotWithId_slotOnly = await prisma.slot.createManyAndReturn({
     *   select: { id_slot: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends slotCreateManyAndReturnArgs>(args?: SelectSubset<T, slotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slot.
     * @param {slotDeleteArgs} args - Arguments to delete one Slot.
     * @example
     * // Delete one Slot
     * const Slot = await prisma.slot.delete({
     *   where: {
     *     // ... filter to delete one Slot
     *   }
     * })
     * 
     */
    delete<T extends slotDeleteArgs>(args: SelectSubset<T, slotDeleteArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slot.
     * @param {slotUpdateArgs} args - Arguments to update one Slot.
     * @example
     * // Update one Slot
     * const slot = await prisma.slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends slotUpdateArgs>(args: SelectSubset<T, slotUpdateArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slots.
     * @param {slotDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends slotDeleteManyArgs>(args?: SelectSubset<T, slotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends slotUpdateManyArgs>(args: SelectSubset<T, slotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots and returns the data updated in the database.
     * @param {slotUpdateManyAndReturnArgs} args - Arguments to update many Slots.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slots and only return the `id_slot`
     * const slotWithId_slotOnly = await prisma.slot.updateManyAndReturn({
     *   select: { id_slot: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends slotUpdateManyAndReturnArgs>(args: SelectSubset<T, slotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slot.
     * @param {slotUpsertArgs} args - Arguments to update or create a Slot.
     * @example
     * // Update or create a Slot
     * const slot = await prisma.slot.upsert({
     *   create: {
     *     // ... data to create a Slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slot we want to update
     *   }
     * })
     */
    upsert<T extends slotUpsertArgs>(args: SelectSubset<T, slotUpsertArgs<ExtArgs>>): Prisma__slotClient<$Result.GetResult<Prisma.$slotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slot.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends slotCountArgs>(
      args?: Subset<T, slotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotAggregateArgs>(args: Subset<T, SlotAggregateArgs>): Prisma.PrismaPromise<GetSlotAggregateType<T>>

    /**
     * Group by Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {slotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends slotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: slotGroupByArgs['orderBy'] }
        : { orderBy?: slotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, slotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the slot model
   */
  readonly fields: slotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__slotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends slot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, slot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    practices<T extends slot$practicesArgs<ExtArgs> = {}>(args?: Subset<T, slot$practicesArgs<ExtArgs>>): Prisma__practicesClient<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the slot model
   */
  interface slotFieldRefs {
    readonly id_slot: FieldRef<"slot", 'String'>
    readonly tanggal: FieldRef<"slot", 'DateTime'>
    readonly total: FieldRef<"slot", 'Int'>
    readonly sisa: FieldRef<"slot", 'Int'>
    readonly create_at: FieldRef<"slot", 'DateTime'>
    readonly update_at: FieldRef<"slot", 'DateTime'>
    readonly id_prak: FieldRef<"slot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * slot findUnique
   */
  export type slotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter, which slot to fetch.
     */
    where: slotWhereUniqueInput
  }

  /**
   * slot findUniqueOrThrow
   */
  export type slotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter, which slot to fetch.
     */
    where: slotWhereUniqueInput
  }

  /**
   * slot findFirst
   */
  export type slotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter, which slot to fetch.
     */
    where?: slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of slots to fetch.
     */
    orderBy?: slotOrderByWithRelationInput | slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for slots.
     */
    cursor?: slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * slot findFirstOrThrow
   */
  export type slotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter, which slot to fetch.
     */
    where?: slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of slots to fetch.
     */
    orderBy?: slotOrderByWithRelationInput | slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for slots.
     */
    cursor?: slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * slot findMany
   */
  export type slotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter, which slots to fetch.
     */
    where?: slotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of slots to fetch.
     */
    orderBy?: slotOrderByWithRelationInput | slotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing slots.
     */
    cursor?: slotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` slots.
     */
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * slot create
   */
  export type slotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * The data needed to create a slot.
     */
    data: XOR<slotCreateInput, slotUncheckedCreateInput>
  }

  /**
   * slot createMany
   */
  export type slotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many slots.
     */
    data: slotCreateManyInput | slotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * slot createManyAndReturn
   */
  export type slotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * The data used to create many slots.
     */
    data: slotCreateManyInput | slotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * slot update
   */
  export type slotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * The data needed to update a slot.
     */
    data: XOR<slotUpdateInput, slotUncheckedUpdateInput>
    /**
     * Choose, which slot to update.
     */
    where: slotWhereUniqueInput
  }

  /**
   * slot updateMany
   */
  export type slotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update slots.
     */
    data: XOR<slotUpdateManyMutationInput, slotUncheckedUpdateManyInput>
    /**
     * Filter which slots to update
     */
    where?: slotWhereInput
    /**
     * Limit how many slots to update.
     */
    limit?: number
  }

  /**
   * slot updateManyAndReturn
   */
  export type slotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * The data used to update slots.
     */
    data: XOR<slotUpdateManyMutationInput, slotUncheckedUpdateManyInput>
    /**
     * Filter which slots to update
     */
    where?: slotWhereInput
    /**
     * Limit how many slots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * slot upsert
   */
  export type slotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * The filter to search for the slot to update in case it exists.
     */
    where: slotWhereUniqueInput
    /**
     * In case the slot found by the `where` argument doesn't exist, create a new slot with this data.
     */
    create: XOR<slotCreateInput, slotUncheckedCreateInput>
    /**
     * In case the slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<slotUpdateInput, slotUncheckedUpdateInput>
  }

  /**
   * slot delete
   */
  export type slotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
    /**
     * Filter which slot to delete.
     */
    where: slotWhereUniqueInput
  }

  /**
   * slot deleteMany
   */
  export type slotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which slots to delete
     */
    where?: slotWhereInput
    /**
     * Limit how many slots to delete.
     */
    limit?: number
  }

  /**
   * slot.bookings
   */
  export type slot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * slot.practices
   */
  export type slot$practicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    where?: practicesWhereInput
  }

  /**
   * slot without action
   */
  export type slotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the slot
     */
    select?: slotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the slot
     */
    omit?: slotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: slotInclude<ExtArgs> | null
  }


  /**
   * Model specialists
   */

  export type AggregateSpecialists = {
    _count: SpecialistsCountAggregateOutputType | null
    _min: SpecialistsMinAggregateOutputType | null
    _max: SpecialistsMaxAggregateOutputType | null
  }

  export type SpecialistsMinAggregateOutputType = {
    id_sp: string | null
    spesialis: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type SpecialistsMaxAggregateOutputType = {
    id_sp: string | null
    spesialis: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type SpecialistsCountAggregateOutputType = {
    id_sp: number
    spesialis: number
    create_at: number
    update_at: number
    _all: number
  }


  export type SpecialistsMinAggregateInputType = {
    id_sp?: true
    spesialis?: true
    create_at?: true
    update_at?: true
  }

  export type SpecialistsMaxAggregateInputType = {
    id_sp?: true
    spesialis?: true
    create_at?: true
    update_at?: true
  }

  export type SpecialistsCountAggregateInputType = {
    id_sp?: true
    spesialis?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type SpecialistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialists to aggregate.
     */
    where?: specialistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialists to fetch.
     */
    orderBy?: specialistsOrderByWithRelationInput | specialistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specialistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specialists
    **/
    _count?: true | SpecialistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialistsMaxAggregateInputType
  }

  export type GetSpecialistsAggregateType<T extends SpecialistsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialists[P]>
      : GetScalarType<T[P], AggregateSpecialists[P]>
  }




  export type specialistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specialistsWhereInput
    orderBy?: specialistsOrderByWithAggregationInput | specialistsOrderByWithAggregationInput[]
    by: SpecialistsScalarFieldEnum[] | SpecialistsScalarFieldEnum
    having?: specialistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialistsCountAggregateInputType | true
    _min?: SpecialistsMinAggregateInputType
    _max?: SpecialistsMaxAggregateInputType
  }

  export type SpecialistsGroupByOutputType = {
    id_sp: string
    spesialis: string
    create_at: Date | null
    update_at: Date | null
    _count: SpecialistsCountAggregateOutputType | null
    _min: SpecialistsMinAggregateOutputType | null
    _max: SpecialistsMaxAggregateOutputType | null
  }

  type GetSpecialistsGroupByPayload<T extends specialistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistsGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistsGroupByOutputType[P]>
        }
      >
    >


  export type specialistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sp?: boolean
    spesialis?: boolean
    create_at?: boolean
    update_at?: boolean
    detail_sp?: boolean | specialists$detail_spArgs<ExtArgs>
    practices?: boolean | specialists$practicesArgs<ExtArgs>
    _count?: boolean | SpecialistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialists"]>

  export type specialistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sp?: boolean
    spesialis?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["specialists"]>

  export type specialistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sp?: boolean
    spesialis?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["specialists"]>

  export type specialistsSelectScalar = {
    id_sp?: boolean
    spesialis?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type specialistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sp" | "spesialis" | "create_at" | "update_at", ExtArgs["result"]["specialists"]>
  export type specialistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_sp?: boolean | specialists$detail_spArgs<ExtArgs>
    practices?: boolean | specialists$practicesArgs<ExtArgs>
    _count?: boolean | SpecialistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type specialistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type specialistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $specialistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specialists"
    objects: {
      detail_sp: Prisma.$detail_spPayload<ExtArgs>[]
      practices: Prisma.$practicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sp: string
      spesialis: string
      create_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["specialists"]>
    composites: {}
  }

  type specialistsGetPayload<S extends boolean | null | undefined | specialistsDefaultArgs> = $Result.GetResult<Prisma.$specialistsPayload, S>

  type specialistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<specialistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialistsCountAggregateInputType | true
    }

  export interface specialistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specialists'], meta: { name: 'specialists' } }
    /**
     * Find zero or one Specialists that matches the filter.
     * @param {specialistsFindUniqueArgs} args - Arguments to find a Specialists
     * @example
     * // Get one Specialists
     * const specialists = await prisma.specialists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specialistsFindUniqueArgs>(args: SelectSubset<T, specialistsFindUniqueArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {specialistsFindUniqueOrThrowArgs} args - Arguments to find a Specialists
     * @example
     * // Get one Specialists
     * const specialists = await prisma.specialists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specialistsFindUniqueOrThrowArgs>(args: SelectSubset<T, specialistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsFindFirstArgs} args - Arguments to find a Specialists
     * @example
     * // Get one Specialists
     * const specialists = await prisma.specialists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specialistsFindFirstArgs>(args?: SelectSubset<T, specialistsFindFirstArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsFindFirstOrThrowArgs} args - Arguments to find a Specialists
     * @example
     * // Get one Specialists
     * const specialists = await prisma.specialists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specialistsFindFirstOrThrowArgs>(args?: SelectSubset<T, specialistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialists
     * const specialists = await prisma.specialists.findMany()
     * 
     * // Get first 10 Specialists
     * const specialists = await prisma.specialists.findMany({ take: 10 })
     * 
     * // Only select the `id_sp`
     * const specialistsWithId_spOnly = await prisma.specialists.findMany({ select: { id_sp: true } })
     * 
     */
    findMany<T extends specialistsFindManyArgs>(args?: SelectSubset<T, specialistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialists.
     * @param {specialistsCreateArgs} args - Arguments to create a Specialists.
     * @example
     * // Create one Specialists
     * const Specialists = await prisma.specialists.create({
     *   data: {
     *     // ... data to create a Specialists
     *   }
     * })
     * 
     */
    create<T extends specialistsCreateArgs>(args: SelectSubset<T, specialistsCreateArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialists.
     * @param {specialistsCreateManyArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialists = await prisma.specialists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specialistsCreateManyArgs>(args?: SelectSubset<T, specialistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialists and returns the data saved in the database.
     * @param {specialistsCreateManyAndReturnArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialists = await prisma.specialists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialists and only return the `id_sp`
     * const specialistsWithId_spOnly = await prisma.specialists.createManyAndReturn({
     *   select: { id_sp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends specialistsCreateManyAndReturnArgs>(args?: SelectSubset<T, specialistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialists.
     * @param {specialistsDeleteArgs} args - Arguments to delete one Specialists.
     * @example
     * // Delete one Specialists
     * const Specialists = await prisma.specialists.delete({
     *   where: {
     *     // ... filter to delete one Specialists
     *   }
     * })
     * 
     */
    delete<T extends specialistsDeleteArgs>(args: SelectSubset<T, specialistsDeleteArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialists.
     * @param {specialistsUpdateArgs} args - Arguments to update one Specialists.
     * @example
     * // Update one Specialists
     * const specialists = await prisma.specialists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specialistsUpdateArgs>(args: SelectSubset<T, specialistsUpdateArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialists.
     * @param {specialistsDeleteManyArgs} args - Arguments to filter Specialists to delete.
     * @example
     * // Delete a few Specialists
     * const { count } = await prisma.specialists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specialistsDeleteManyArgs>(args?: SelectSubset<T, specialistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialists
     * const specialists = await prisma.specialists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specialistsUpdateManyArgs>(args: SelectSubset<T, specialistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialists and returns the data updated in the database.
     * @param {specialistsUpdateManyAndReturnArgs} args - Arguments to update many Specialists.
     * @example
     * // Update many Specialists
     * const specialists = await prisma.specialists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialists and only return the `id_sp`
     * const specialistsWithId_spOnly = await prisma.specialists.updateManyAndReturn({
     *   select: { id_sp: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends specialistsUpdateManyAndReturnArgs>(args: SelectSubset<T, specialistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialists.
     * @param {specialistsUpsertArgs} args - Arguments to update or create a Specialists.
     * @example
     * // Update or create a Specialists
     * const specialists = await prisma.specialists.upsert({
     *   create: {
     *     // ... data to create a Specialists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialists we want to update
     *   }
     * })
     */
    upsert<T extends specialistsUpsertArgs>(args: SelectSubset<T, specialistsUpsertArgs<ExtArgs>>): Prisma__specialistsClient<$Result.GetResult<Prisma.$specialistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsCountArgs} args - Arguments to filter Specialists to count.
     * @example
     * // Count the number of Specialists
     * const count = await prisma.specialists.count({
     *   where: {
     *     // ... the filter for the Specialists we want to count
     *   }
     * })
    **/
    count<T extends specialistsCountArgs>(
      args?: Subset<T, specialistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialistsAggregateArgs>(args: Subset<T, SpecialistsAggregateArgs>): Prisma.PrismaPromise<GetSpecialistsAggregateType<T>>

    /**
     * Group by Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends specialistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specialistsGroupByArgs['orderBy'] }
        : { orderBy?: specialistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, specialistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specialists model
   */
  readonly fields: specialistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specialists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specialistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_sp<T extends specialists$detail_spArgs<ExtArgs> = {}>(args?: Subset<T, specialists$detail_spArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_spPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    practices<T extends specialists$practicesArgs<ExtArgs> = {}>(args?: Subset<T, specialists$practicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the specialists model
   */
  interface specialistsFieldRefs {
    readonly id_sp: FieldRef<"specialists", 'String'>
    readonly spesialis: FieldRef<"specialists", 'String'>
    readonly create_at: FieldRef<"specialists", 'DateTime'>
    readonly update_at: FieldRef<"specialists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * specialists findUnique
   */
  export type specialistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter, which specialists to fetch.
     */
    where: specialistsWhereUniqueInput
  }

  /**
   * specialists findUniqueOrThrow
   */
  export type specialistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter, which specialists to fetch.
     */
    where: specialistsWhereUniqueInput
  }

  /**
   * specialists findFirst
   */
  export type specialistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter, which specialists to fetch.
     */
    where?: specialistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialists to fetch.
     */
    orderBy?: specialistsOrderByWithRelationInput | specialistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialists.
     */
    cursor?: specialistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialists.
     */
    distinct?: SpecialistsScalarFieldEnum | SpecialistsScalarFieldEnum[]
  }

  /**
   * specialists findFirstOrThrow
   */
  export type specialistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter, which specialists to fetch.
     */
    where?: specialistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialists to fetch.
     */
    orderBy?: specialistsOrderByWithRelationInput | specialistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialists.
     */
    cursor?: specialistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialists.
     */
    distinct?: SpecialistsScalarFieldEnum | SpecialistsScalarFieldEnum[]
  }

  /**
   * specialists findMany
   */
  export type specialistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter, which specialists to fetch.
     */
    where?: specialistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialists to fetch.
     */
    orderBy?: specialistsOrderByWithRelationInput | specialistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specialists.
     */
    cursor?: specialistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialists.
     */
    skip?: number
    distinct?: SpecialistsScalarFieldEnum | SpecialistsScalarFieldEnum[]
  }

  /**
   * specialists create
   */
  export type specialistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * The data needed to create a specialists.
     */
    data: XOR<specialistsCreateInput, specialistsUncheckedCreateInput>
  }

  /**
   * specialists createMany
   */
  export type specialistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specialists.
     */
    data: specialistsCreateManyInput | specialistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialists createManyAndReturn
   */
  export type specialistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * The data used to create many specialists.
     */
    data: specialistsCreateManyInput | specialistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialists update
   */
  export type specialistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * The data needed to update a specialists.
     */
    data: XOR<specialistsUpdateInput, specialistsUncheckedUpdateInput>
    /**
     * Choose, which specialists to update.
     */
    where: specialistsWhereUniqueInput
  }

  /**
   * specialists updateMany
   */
  export type specialistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specialists.
     */
    data: XOR<specialistsUpdateManyMutationInput, specialistsUncheckedUpdateManyInput>
    /**
     * Filter which specialists to update
     */
    where?: specialistsWhereInput
    /**
     * Limit how many specialists to update.
     */
    limit?: number
  }

  /**
   * specialists updateManyAndReturn
   */
  export type specialistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * The data used to update specialists.
     */
    data: XOR<specialistsUpdateManyMutationInput, specialistsUncheckedUpdateManyInput>
    /**
     * Filter which specialists to update
     */
    where?: specialistsWhereInput
    /**
     * Limit how many specialists to update.
     */
    limit?: number
  }

  /**
   * specialists upsert
   */
  export type specialistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * The filter to search for the specialists to update in case it exists.
     */
    where: specialistsWhereUniqueInput
    /**
     * In case the specialists found by the `where` argument doesn't exist, create a new specialists with this data.
     */
    create: XOR<specialistsCreateInput, specialistsUncheckedCreateInput>
    /**
     * In case the specialists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specialistsUpdateInput, specialistsUncheckedUpdateInput>
  }

  /**
   * specialists delete
   */
  export type specialistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
    /**
     * Filter which specialists to delete.
     */
    where: specialistsWhereUniqueInput
  }

  /**
   * specialists deleteMany
   */
  export type specialistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialists to delete
     */
    where?: specialistsWhereInput
    /**
     * Limit how many specialists to delete.
     */
    limit?: number
  }

  /**
   * specialists.detail_sp
   */
  export type specialists$detail_spArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_sp
     */
    select?: detail_spSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_sp
     */
    omit?: detail_spOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_spInclude<ExtArgs> | null
    where?: detail_spWhereInput
    orderBy?: detail_spOrderByWithRelationInput | detail_spOrderByWithRelationInput[]
    cursor?: detail_spWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_spScalarFieldEnum | Detail_spScalarFieldEnum[]
  }

  /**
   * specialists.practices
   */
  export type specialists$practicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practices
     */
    select?: practicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practices
     */
    omit?: practicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicesInclude<ExtArgs> | null
    where?: practicesWhereInput
    orderBy?: practicesOrderByWithRelationInput | practicesOrderByWithRelationInput[]
    cursor?: practicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticesScalarFieldEnum | PracticesScalarFieldEnum[]
  }

  /**
   * specialists without action
   */
  export type specialistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialists
     */
    select?: specialistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialists
     */
    omit?: specialistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialistsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: string | null
    email: string | null
    nama: string | null
    sandi: string | null
    id_bpjs: string | null
    nik: string | null
    gender: $Enums.gender_enum | null
    tgl_lahir: Date | null
    foto: Uint8Array | null
    role: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: string | null
    email: string | null
    nama: string | null
    sandi: string | null
    id_bpjs: string | null
    nik: string | null
    gender: $Enums.gender_enum | null
    tgl_lahir: Date | null
    foto: Uint8Array | null
    role: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    email: number
    nama: number
    sandi: number
    id_bpjs: number
    nik: number
    gender: number
    tgl_lahir: number
    foto: number
    role: number
    create_at: number
    update_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id_user?: true
    email?: true
    nama?: true
    sandi?: true
    id_bpjs?: true
    nik?: true
    gender?: true
    tgl_lahir?: true
    foto?: true
    role?: true
    create_at?: true
    update_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    email?: true
    nama?: true
    sandi?: true
    id_bpjs?: true
    nik?: true
    gender?: true
    tgl_lahir?: true
    foto?: true
    role?: true
    create_at?: true
    update_at?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    email?: true
    nama?: true
    sandi?: true
    id_bpjs?: true
    nik?: true
    gender?: true
    tgl_lahir?: true
    foto?: true
    role?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs: string | null
    nik: string | null
    gender: $Enums.gender_enum
    tgl_lahir: Date | null
    foto: Uint8Array | null
    role: string | null
    create_at: Date | null
    update_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    nama?: boolean
    sandi?: boolean
    id_bpjs?: boolean
    nik?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    foto?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    nama?: boolean
    sandi?: boolean
    id_bpjs?: boolean
    nik?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    foto?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    nama?: boolean
    sandi?: boolean
    id_bpjs?: boolean
    nik?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    foto?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id_user?: boolean
    email?: boolean
    nama?: boolean
    sandi?: boolean
    id_bpjs?: boolean
    nik?: boolean
    gender?: boolean
    tgl_lahir?: boolean
    foto?: boolean
    role?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "email" | "nama" | "sandi" | "id_bpjs" | "nik" | "gender" | "tgl_lahir" | "foto" | "role" | "create_at" | "update_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      email: string
      nama: string
      sandi: string
      id_bpjs: string | null
      nik: string | null
      gender: $Enums.gender_enum
      tgl_lahir: Date | null
      foto: Uint8Array | null
      role: string | null
      create_at: Date | null
      update_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly nama: FieldRef<"users", 'String'>
    readonly sandi: FieldRef<"users", 'String'>
    readonly id_bpjs: FieldRef<"users", 'String'>
    readonly nik: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'gender_enum'>
    readonly tgl_lahir: FieldRef<"users", 'DateTime'>
    readonly foto: FieldRef<"users", 'Bytes'>
    readonly role: FieldRef<"users", 'String'>
    readonly create_at: FieldRef<"users", 'DateTime'>
    readonly update_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id_kota: number | null
    id_prov: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id_kota: number | null
    id_prov: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id_kota: number | null
    nama_kota: string | null
    id_prov: number | null
  }

  export type CitiesMaxAggregateOutputType = {
    id_kota: number | null
    nama_kota: string | null
    id_prov: number | null
  }

  export type CitiesCountAggregateOutputType = {
    id_kota: number
    nama_kota: number
    id_prov: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id_kota?: true
    id_prov?: true
  }

  export type CitiesSumAggregateInputType = {
    id_kota?: true
    id_prov?: true
  }

  export type CitiesMinAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
  }

  export type CitiesMaxAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
  }

  export type CitiesCountAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id_kota: number
    nama_kota: string
    id_prov: number
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    hospitals?: boolean | cities$hospitalsArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectScalar = {
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
  }

  export type citiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kota" | "nama_kota" | "id_prov", ExtArgs["result"]["cities"]>
  export type citiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    hospitals?: boolean | cities$hospitalsArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type citiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }
  export type citiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {
      provinces: Prisma.$provincesPayload<ExtArgs>
      hospitals: Prisma.$hospitalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kota: number
      nama_kota: string
      id_prov: number
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.findMany({ select: { id_kota: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {citiesCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.createManyAndReturn({
     *   select: { id_kota: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends citiesCreateManyAndReturnArgs>(args?: SelectSubset<T, citiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {citiesUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.updateManyAndReturn({
     *   select: { id_kota: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends citiesUpdateManyAndReturnArgs>(args: SelectSubset<T, citiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provinces<T extends provincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provincesDefaultArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hospitals<T extends cities$hospitalsArgs<ExtArgs> = {}>(args?: Subset<T, cities$hospitalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cities model
   */
  interface citiesFieldRefs {
    readonly id_kota: FieldRef<"cities", 'Int'>
    readonly nama_kota: FieldRef<"cities", 'String'>
    readonly id_prov: FieldRef<"cities", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities createManyAndReturn
   */
  export type citiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities updateManyAndReturn
   */
  export type citiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * cities.hospitals
   */
  export type cities$hospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    where?: hospitalsWhereInput
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    cursor?: hospitalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
  }


  /**
   * Model provinces
   */

  export type AggregateProvinces = {
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  export type ProvincesAvgAggregateOutputType = {
    id_prov: number | null
  }

  export type ProvincesSumAggregateOutputType = {
    id_prov: number | null
  }

  export type ProvincesMinAggregateOutputType = {
    id_prov: number | null
    nama_prov: string | null
  }

  export type ProvincesMaxAggregateOutputType = {
    id_prov: number | null
    nama_prov: string | null
  }

  export type ProvincesCountAggregateOutputType = {
    id_prov: number
    nama_prov: number
    _all: number
  }


  export type ProvincesAvgAggregateInputType = {
    id_prov?: true
  }

  export type ProvincesSumAggregateInputType = {
    id_prov?: true
  }

  export type ProvincesMinAggregateInputType = {
    id_prov?: true
    nama_prov?: true
  }

  export type ProvincesMaxAggregateInputType = {
    id_prov?: true
    nama_prov?: true
  }

  export type ProvincesCountAggregateInputType = {
    id_prov?: true
    nama_prov?: true
    _all?: true
  }

  export type ProvincesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to aggregate.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provinces
    **/
    _count?: true | ProvincesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvincesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvincesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvincesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvincesMaxAggregateInputType
  }

  export type GetProvincesAggregateType<T extends ProvincesAggregateArgs> = {
        [P in keyof T & keyof AggregateProvinces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvinces[P]>
      : GetScalarType<T[P], AggregateProvinces[P]>
  }




  export type provincesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provincesWhereInput
    orderBy?: provincesOrderByWithAggregationInput | provincesOrderByWithAggregationInput[]
    by: ProvincesScalarFieldEnum[] | ProvincesScalarFieldEnum
    having?: provincesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvincesCountAggregateInputType | true
    _avg?: ProvincesAvgAggregateInputType
    _sum?: ProvincesSumAggregateInputType
    _min?: ProvincesMinAggregateInputType
    _max?: ProvincesMaxAggregateInputType
  }

  export type ProvincesGroupByOutputType = {
    id_prov: number
    nama_prov: string
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  type GetProvincesGroupByPayload<T extends provincesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvincesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvincesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
            : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
        }
      >
    >


  export type provincesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
    cities?: boolean | provinces$citiesArgs<ExtArgs>
    hospitals?: boolean | provinces$hospitalsArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectScalar = {
    id_prov?: boolean
    nama_prov?: boolean
  }

  export type provincesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prov" | "nama_prov", ExtArgs["result"]["provinces"]>
  export type provincesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | provinces$citiesArgs<ExtArgs>
    hospitals?: boolean | provinces$hospitalsArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provincesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type provincesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $provincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "provinces"
    objects: {
      cities: Prisma.$citiesPayload<ExtArgs>[]
      hospitals: Prisma.$hospitalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prov: number
      nama_prov: string
    }, ExtArgs["result"]["provinces"]>
    composites: {}
  }

  type provincesGetPayload<S extends boolean | null | undefined | provincesDefaultArgs> = $Result.GetResult<Prisma.$provincesPayload, S>

  type provincesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<provincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvincesCountAggregateInputType | true
    }

  export interface provincesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['provinces'], meta: { name: 'provinces' } }
    /**
     * Find zero or one Provinces that matches the filter.
     * @param {provincesFindUniqueArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends provincesFindUniqueArgs>(args: SelectSubset<T, provincesFindUniqueArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provinces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {provincesFindUniqueOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends provincesFindUniqueOrThrowArgs>(args: SelectSubset<T, provincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindFirstArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends provincesFindFirstArgs>(args?: SelectSubset<T, provincesFindFirstArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindFirstOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends provincesFindFirstOrThrowArgs>(args?: SelectSubset<T, provincesFindFirstOrThrowArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.provinces.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.provinces.findMany({ take: 10 })
     * 
     * // Only select the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.findMany({ select: { id_prov: true } })
     * 
     */
    findMany<T extends provincesFindManyArgs>(args?: SelectSubset<T, provincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provinces.
     * @param {provincesCreateArgs} args - Arguments to create a Provinces.
     * @example
     * // Create one Provinces
     * const Provinces = await prisma.provinces.create({
     *   data: {
     *     // ... data to create a Provinces
     *   }
     * })
     * 
     */
    create<T extends provincesCreateArgs>(args: SelectSubset<T, provincesCreateArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {provincesCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends provincesCreateManyArgs>(args?: SelectSubset<T, provincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {provincesCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.createManyAndReturn({
     *   select: { id_prov: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends provincesCreateManyAndReturnArgs>(args?: SelectSubset<T, provincesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provinces.
     * @param {provincesDeleteArgs} args - Arguments to delete one Provinces.
     * @example
     * // Delete one Provinces
     * const Provinces = await prisma.provinces.delete({
     *   where: {
     *     // ... filter to delete one Provinces
     *   }
     * })
     * 
     */
    delete<T extends provincesDeleteArgs>(args: SelectSubset<T, provincesDeleteArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provinces.
     * @param {provincesUpdateArgs} args - Arguments to update one Provinces.
     * @example
     * // Update one Provinces
     * const provinces = await prisma.provinces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends provincesUpdateArgs>(args: SelectSubset<T, provincesUpdateArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {provincesDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.provinces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends provincesDeleteManyArgs>(args?: SelectSubset<T, provincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends provincesUpdateManyArgs>(args: SelectSubset<T, provincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {provincesUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.updateManyAndReturn({
     *   select: { id_prov: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends provincesUpdateManyAndReturnArgs>(args: SelectSubset<T, provincesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provinces.
     * @param {provincesUpsertArgs} args - Arguments to update or create a Provinces.
     * @example
     * // Update or create a Provinces
     * const provinces = await prisma.provinces.upsert({
     *   create: {
     *     // ... data to create a Provinces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provinces we want to update
     *   }
     * })
     */
    upsert<T extends provincesUpsertArgs>(args: SelectSubset<T, provincesUpsertArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.provinces.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends provincesCountArgs>(
      args?: Subset<T, provincesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvincesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvincesAggregateArgs>(args: Subset<T, ProvincesAggregateArgs>): Prisma.PrismaPromise<GetProvincesAggregateType<T>>

    /**
     * Group by Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends provincesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provincesGroupByArgs['orderBy'] }
        : { orderBy?: provincesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, provincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the provinces model
   */
  readonly fields: provincesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for provinces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provincesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends provinces$citiesArgs<ExtArgs> = {}>(args?: Subset<T, provinces$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospitals<T extends provinces$hospitalsArgs<ExtArgs> = {}>(args?: Subset<T, provinces$hospitalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the provinces model
   */
  interface provincesFieldRefs {
    readonly id_prov: FieldRef<"provinces", 'Int'>
    readonly nama_prov: FieldRef<"provinces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * provinces findUnique
   */
  export type provincesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces findUniqueOrThrow
   */
  export type provincesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces findFirst
   */
  export type provincesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces findFirstOrThrow
   */
  export type provincesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces findMany
   */
  export type provincesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces create
   */
  export type provincesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The data needed to create a provinces.
     */
    data: XOR<provincesCreateInput, provincesUncheckedCreateInput>
  }

  /**
   * provinces createMany
   */
  export type provincesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provinces.
     */
    data: provincesCreateManyInput | provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * provinces createManyAndReturn
   */
  export type provincesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * The data used to create many provinces.
     */
    data: provincesCreateManyInput | provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * provinces update
   */
  export type provincesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The data needed to update a provinces.
     */
    data: XOR<provincesUpdateInput, provincesUncheckedUpdateInput>
    /**
     * Choose, which provinces to update.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces updateMany
   */
  export type provincesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provinces.
     */
    data: XOR<provincesUpdateManyMutationInput, provincesUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * provinces updateManyAndReturn
   */
  export type provincesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * The data used to update provinces.
     */
    data: XOR<provincesUpdateManyMutationInput, provincesUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * provinces upsert
   */
  export type provincesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The filter to search for the provinces to update in case it exists.
     */
    where: provincesWhereUniqueInput
    /**
     * In case the provinces found by the `where` argument doesn't exist, create a new provinces with this data.
     */
    create: XOR<provincesCreateInput, provincesUncheckedCreateInput>
    /**
     * In case the provinces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provincesUpdateInput, provincesUncheckedUpdateInput>
  }

  /**
   * provinces delete
   */
  export type provincesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter which provinces to delete.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces deleteMany
   */
  export type provincesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to delete
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to delete.
     */
    limit?: number
  }

  /**
   * provinces.cities
   */
  export type provinces$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    cursor?: citiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * provinces.hospitals
   */
  export type provinces$hospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitals
     */
    select?: hospitalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitals
     */
    omit?: hospitalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalsInclude<ExtArgs> | null
    where?: hospitalsWhereInput
    orderBy?: hospitalsOrderByWithRelationInput | hospitalsOrderByWithRelationInput[]
    cursor?: hospitalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalsScalarFieldEnum | HospitalsScalarFieldEnum[]
  }

  /**
   * provinces without action
   */
  export type provincesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookingsScalarFieldEnum: {
    id_user: 'id_user',
    id_slot: 'id_slot',
    no_antrian: 'no_antrian',
    status: 'status',
    start_consul: 'start_consul',
    end_consul: 'end_consul',
    gejala: 'gejala',
    durasi: 'durasi',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const Detail_spScalarFieldEnum: {
    lisensi: 'lisensi',
    id_sp: 'id_sp'
  };

  export type Detail_spScalarFieldEnum = (typeof Detail_spScalarFieldEnum)[keyof typeof Detail_spScalarFieldEnum]


  export const DoctorsScalarFieldEnum: {
    lisensi: 'lisensi',
    nama_dokter: 'nama_dokter',
    email: 'email',
    sandi_dokter: 'sandi_dokter',
    gender: 'gender',
    tgl_lahir: 'tgl_lahir',
    status: 'status',
    foto: 'foto',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const HospitalsScalarFieldEnum: {
    id_rs: 'id_rs',
    sandi_admin: 'sandi_admin',
    nama_rs: 'nama_rs',
    tipe: 'tipe',
    status: 'status',
    deskripsi: 'deskripsi',
    foto: 'foto',
    alamat: 'alamat',
    kode_pos: 'kode_pos',
    latitude: 'latitude',
    longitude: 'longitude',
    create_at: 'create_at',
    update_at: 'update_at',
    id_kota: 'id_kota',
    id_prov: 'id_prov'
  };

  export type HospitalsScalarFieldEnum = (typeof HospitalsScalarFieldEnum)[keyof typeof HospitalsScalarFieldEnum]


  export const Ml_bookingScalarFieldEnum: {
    id: 'id',
    id_rs: 'id_rs',
    lisensi: 'lisensi',
    id_sp: 'id_sp',
    hari: 'hari',
    gejala: 'gejala',
    start_consul: 'start_consul',
    end_consul: 'end_consul',
    duration: 'duration'
  };

  export type Ml_bookingScalarFieldEnum = (typeof Ml_bookingScalarFieldEnum)[keyof typeof Ml_bookingScalarFieldEnum]


  export const PracticesScalarFieldEnum: {
    id_prak: 'id_prak',
    id_rs: 'id_rs',
    id_sp: 'id_sp',
    lisensi: 'lisensi',
    id_sched: 'id_sched'
  };

  export type PracticesScalarFieldEnum = (typeof PracticesScalarFieldEnum)[keyof typeof PracticesScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    id_sched: 'id_sched',
    hari: 'hari',
    start_session: 'start_session',
    end_session: 'end_session',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const SlotScalarFieldEnum: {
    id_slot: 'id_slot',
    tanggal: 'tanggal',
    total: 'total',
    sisa: 'sisa',
    create_at: 'create_at',
    update_at: 'update_at',
    id_prak: 'id_prak'
  };

  export type SlotScalarFieldEnum = (typeof SlotScalarFieldEnum)[keyof typeof SlotScalarFieldEnum]


  export const SpecialistsScalarFieldEnum: {
    id_sp: 'id_sp',
    spesialis: 'spesialis',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type SpecialistsScalarFieldEnum = (typeof SpecialistsScalarFieldEnum)[keyof typeof SpecialistsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    email: 'email',
    nama: 'nama',
    sandi: 'sandi',
    id_bpjs: 'id_bpjs',
    nik: 'nik',
    gender: 'gender',
    tgl_lahir: 'tgl_lahir',
    foto: 'foto',
    role: 'role',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id_kota: 'id_kota',
    nama_kota: 'nama_kota',
    id_prov: 'id_prov'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const ProvincesScalarFieldEnum: {
    id_prov: 'id_prov',
    nama_prov: 'nama_prov'
  };

  export type ProvincesScalarFieldEnum = (typeof ProvincesScalarFieldEnum)[keyof typeof ProvincesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'gender_enum'
   */
  export type Enumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum'>
    


  /**
   * Reference to a field of type 'gender_enum[]'
   */
  export type ListEnumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum[]'>
    


  /**
   * Reference to a field of type 'status_doctor'
   */
  export type Enumstatus_doctorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_doctor'>
    


  /**
   * Reference to a field of type 'status_doctor[]'
   */
  export type ListEnumstatus_doctorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_doctor[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'tipe_enum'
   */
  export type Enumtipe_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipe_enum'>
    


  /**
   * Reference to a field of type 'tipe_enum[]'
   */
  export type ListEnumtipe_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipe_enum[]'>
    


  /**
   * Reference to a field of type 'status_rs'
   */
  export type Enumstatus_rsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_rs'>
    


  /**
   * Reference to a field of type 'status_rs[]'
   */
  export type ListEnumstatus_rsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_rs[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'hari_enum'
   */
  export type Enumhari_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hari_enum'>
    


  /**
   * Reference to a field of type 'hari_enum[]'
   */
  export type ListEnumhari_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hari_enum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id_user?: StringFilter<"bookings"> | string
    id_slot?: StringFilter<"bookings"> | string
    no_antrian?: IntFilter<"bookings"> | number
    status?: StringFilter<"bookings"> | string
    start_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    end_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    gejala?: StringNullableFilter<"bookings"> | string | null
    durasi?: IntNullableFilter<"bookings"> | number | null
    create_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    update_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    slot?: XOR<SlotScalarRelationFilter, slotWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type bookingsOrderByWithRelationInput = {
    id_user?: SortOrder
    id_slot?: SortOrder
    no_antrian?: SortOrder
    status?: SortOrder
    start_consul?: SortOrderInput | SortOrder
    end_consul?: SortOrderInput | SortOrder
    gejala?: SortOrderInput | SortOrder
    durasi?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    slot?: slotOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_slot?: bookingsId_userId_slotCompoundUniqueInput
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id_user?: StringFilter<"bookings"> | string
    id_slot?: StringFilter<"bookings"> | string
    no_antrian?: IntFilter<"bookings"> | number
    status?: StringFilter<"bookings"> | string
    start_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    end_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    gejala?: StringNullableFilter<"bookings"> | string | null
    durasi?: IntNullableFilter<"bookings"> | number | null
    create_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    update_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    slot?: XOR<SlotScalarRelationFilter, slotWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_user_id_slot">

  export type bookingsOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_slot?: SortOrder
    no_antrian?: SortOrder
    status?: SortOrder
    start_consul?: SortOrderInput | SortOrder
    end_consul?: SortOrderInput | SortOrder
    gejala?: SortOrderInput | SortOrder
    durasi?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"bookings"> | string
    id_slot?: StringWithAggregatesFilter<"bookings"> | string
    no_antrian?: IntWithAggregatesFilter<"bookings"> | number
    status?: StringWithAggregatesFilter<"bookings"> | string
    start_consul?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    end_consul?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    gejala?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    durasi?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    create_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
  }

  export type detail_spWhereInput = {
    AND?: detail_spWhereInput | detail_spWhereInput[]
    OR?: detail_spWhereInput[]
    NOT?: detail_spWhereInput | detail_spWhereInput[]
    lisensi?: StringFilter<"detail_sp"> | string
    id_sp?: StringFilter<"detail_sp"> | string
    specialists?: XOR<SpecialistsScalarRelationFilter, specialistsWhereInput>
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
  }

  export type detail_spOrderByWithRelationInput = {
    lisensi?: SortOrder
    id_sp?: SortOrder
    specialists?: specialistsOrderByWithRelationInput
    doctors?: doctorsOrderByWithRelationInput
  }

  export type detail_spWhereUniqueInput = Prisma.AtLeast<{
    lisensi_id_sp?: detail_spLisensiId_spCompoundUniqueInput
    AND?: detail_spWhereInput | detail_spWhereInput[]
    OR?: detail_spWhereInput[]
    NOT?: detail_spWhereInput | detail_spWhereInput[]
    lisensi?: StringFilter<"detail_sp"> | string
    id_sp?: StringFilter<"detail_sp"> | string
    specialists?: XOR<SpecialistsScalarRelationFilter, specialistsWhereInput>
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
  }, "lisensi_id_sp">

  export type detail_spOrderByWithAggregationInput = {
    lisensi?: SortOrder
    id_sp?: SortOrder
    _count?: detail_spCountOrderByAggregateInput
    _max?: detail_spMaxOrderByAggregateInput
    _min?: detail_spMinOrderByAggregateInput
  }

  export type detail_spScalarWhereWithAggregatesInput = {
    AND?: detail_spScalarWhereWithAggregatesInput | detail_spScalarWhereWithAggregatesInput[]
    OR?: detail_spScalarWhereWithAggregatesInput[]
    NOT?: detail_spScalarWhereWithAggregatesInput | detail_spScalarWhereWithAggregatesInput[]
    lisensi?: StringWithAggregatesFilter<"detail_sp"> | string
    id_sp?: StringWithAggregatesFilter<"detail_sp"> | string
  }

  export type doctorsWhereInput = {
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    lisensi?: StringFilter<"doctors"> | string
    nama_dokter?: StringFilter<"doctors"> | string
    email?: StringFilter<"doctors"> | string
    sandi_dokter?: StringFilter<"doctors"> | string
    gender?: Enumgender_enumFilter<"doctors"> | $Enums.gender_enum
    tgl_lahir?: DateTimeFilter<"doctors"> | Date | string
    status?: Enumstatus_doctorFilter<"doctors"> | $Enums.status_doctor
    foto?: BytesNullableFilter<"doctors"> | Uint8Array | null
    create_at?: DateTimeNullableFilter<"doctors"> | Date | string | null
    update_at?: DateTimeNullableFilter<"doctors"> | Date | string | null
    detail_sp?: Detail_spListRelationFilter
    practices?: PracticesListRelationFilter
  }

  export type doctorsOrderByWithRelationInput = {
    lisensi?: SortOrder
    nama_dokter?: SortOrder
    email?: SortOrder
    sandi_dokter?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    foto?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    detail_sp?: detail_spOrderByRelationAggregateInput
    practices?: practicesOrderByRelationAggregateInput
  }

  export type doctorsWhereUniqueInput = Prisma.AtLeast<{
    lisensi?: string
    email?: string
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    nama_dokter?: StringFilter<"doctors"> | string
    sandi_dokter?: StringFilter<"doctors"> | string
    gender?: Enumgender_enumFilter<"doctors"> | $Enums.gender_enum
    tgl_lahir?: DateTimeFilter<"doctors"> | Date | string
    status?: Enumstatus_doctorFilter<"doctors"> | $Enums.status_doctor
    foto?: BytesNullableFilter<"doctors"> | Uint8Array | null
    create_at?: DateTimeNullableFilter<"doctors"> | Date | string | null
    update_at?: DateTimeNullableFilter<"doctors"> | Date | string | null
    detail_sp?: Detail_spListRelationFilter
    practices?: PracticesListRelationFilter
  }, "lisensi" | "email">

  export type doctorsOrderByWithAggregationInput = {
    lisensi?: SortOrder
    nama_dokter?: SortOrder
    email?: SortOrder
    sandi_dokter?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    foto?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: doctorsCountOrderByAggregateInput
    _max?: doctorsMaxOrderByAggregateInput
    _min?: doctorsMinOrderByAggregateInput
  }

  export type doctorsScalarWhereWithAggregatesInput = {
    AND?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    OR?: doctorsScalarWhereWithAggregatesInput[]
    NOT?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    lisensi?: StringWithAggregatesFilter<"doctors"> | string
    nama_dokter?: StringWithAggregatesFilter<"doctors"> | string
    email?: StringWithAggregatesFilter<"doctors"> | string
    sandi_dokter?: StringWithAggregatesFilter<"doctors"> | string
    gender?: Enumgender_enumWithAggregatesFilter<"doctors"> | $Enums.gender_enum
    tgl_lahir?: DateTimeWithAggregatesFilter<"doctors"> | Date | string
    status?: Enumstatus_doctorWithAggregatesFilter<"doctors"> | $Enums.status_doctor
    foto?: BytesNullableWithAggregatesFilter<"doctors"> | Uint8Array | null
    create_at?: DateTimeNullableWithAggregatesFilter<"doctors"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"doctors"> | Date | string | null
  }

  export type hospitalsWhereInput = {
    AND?: hospitalsWhereInput | hospitalsWhereInput[]
    OR?: hospitalsWhereInput[]
    NOT?: hospitalsWhereInput | hospitalsWhereInput[]
    id_rs?: StringFilter<"hospitals"> | string
    sandi_admin?: StringFilter<"hospitals"> | string
    nama_rs?: StringFilter<"hospitals"> | string
    tipe?: Enumtipe_enumFilter<"hospitals"> | $Enums.tipe_enum
    status?: Enumstatus_rsFilter<"hospitals"> | $Enums.status_rs
    deskripsi?: StringNullableFilter<"hospitals"> | string | null
    foto?: BytesNullableFilter<"hospitals"> | Uint8Array | null
    alamat?: StringFilter<"hospitals"> | string
    kode_pos?: StringFilter<"hospitals"> | string
    latitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    create_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    update_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    id_kota?: IntNullableFilter<"hospitals"> | number | null
    id_prov?: IntNullableFilter<"hospitals"> | number | null
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    provinces?: XOR<ProvincesNullableScalarRelationFilter, provincesWhereInput> | null
    practices?: PracticesListRelationFilter
  }

  export type hospitalsOrderByWithRelationInput = {
    id_rs?: SortOrder
    sandi_admin?: SortOrder
    nama_rs?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id_kota?: SortOrderInput | SortOrder
    id_prov?: SortOrderInput | SortOrder
    cities?: citiesOrderByWithRelationInput
    provinces?: provincesOrderByWithRelationInput
    practices?: practicesOrderByRelationAggregateInput
  }

  export type hospitalsWhereUniqueInput = Prisma.AtLeast<{
    id_rs?: string
    AND?: hospitalsWhereInput | hospitalsWhereInput[]
    OR?: hospitalsWhereInput[]
    NOT?: hospitalsWhereInput | hospitalsWhereInput[]
    sandi_admin?: StringFilter<"hospitals"> | string
    nama_rs?: StringFilter<"hospitals"> | string
    tipe?: Enumtipe_enumFilter<"hospitals"> | $Enums.tipe_enum
    status?: Enumstatus_rsFilter<"hospitals"> | $Enums.status_rs
    deskripsi?: StringNullableFilter<"hospitals"> | string | null
    foto?: BytesNullableFilter<"hospitals"> | Uint8Array | null
    alamat?: StringFilter<"hospitals"> | string
    kode_pos?: StringFilter<"hospitals"> | string
    latitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    create_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    update_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    id_kota?: IntNullableFilter<"hospitals"> | number | null
    id_prov?: IntNullableFilter<"hospitals"> | number | null
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    provinces?: XOR<ProvincesNullableScalarRelationFilter, provincesWhereInput> | null
    practices?: PracticesListRelationFilter
  }, "id_rs">

  export type hospitalsOrderByWithAggregationInput = {
    id_rs?: SortOrder
    sandi_admin?: SortOrder
    nama_rs?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id_kota?: SortOrderInput | SortOrder
    id_prov?: SortOrderInput | SortOrder
    _count?: hospitalsCountOrderByAggregateInput
    _avg?: hospitalsAvgOrderByAggregateInput
    _max?: hospitalsMaxOrderByAggregateInput
    _min?: hospitalsMinOrderByAggregateInput
    _sum?: hospitalsSumOrderByAggregateInput
  }

  export type hospitalsScalarWhereWithAggregatesInput = {
    AND?: hospitalsScalarWhereWithAggregatesInput | hospitalsScalarWhereWithAggregatesInput[]
    OR?: hospitalsScalarWhereWithAggregatesInput[]
    NOT?: hospitalsScalarWhereWithAggregatesInput | hospitalsScalarWhereWithAggregatesInput[]
    id_rs?: StringWithAggregatesFilter<"hospitals"> | string
    sandi_admin?: StringWithAggregatesFilter<"hospitals"> | string
    nama_rs?: StringWithAggregatesFilter<"hospitals"> | string
    tipe?: Enumtipe_enumWithAggregatesFilter<"hospitals"> | $Enums.tipe_enum
    status?: Enumstatus_rsWithAggregatesFilter<"hospitals"> | $Enums.status_rs
    deskripsi?: StringNullableWithAggregatesFilter<"hospitals"> | string | null
    foto?: BytesNullableWithAggregatesFilter<"hospitals"> | Uint8Array | null
    alamat?: StringWithAggregatesFilter<"hospitals"> | string
    kode_pos?: StringWithAggregatesFilter<"hospitals"> | string
    latitude?: DecimalWithAggregatesFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    create_at?: DateTimeNullableWithAggregatesFilter<"hospitals"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"hospitals"> | Date | string | null
    id_kota?: IntNullableWithAggregatesFilter<"hospitals"> | number | null
    id_prov?: IntNullableWithAggregatesFilter<"hospitals"> | number | null
  }

  export type ml_bookingWhereInput = {
    AND?: ml_bookingWhereInput | ml_bookingWhereInput[]
    OR?: ml_bookingWhereInput[]
    NOT?: ml_bookingWhereInput | ml_bookingWhereInput[]
    id?: StringFilter<"ml_booking"> | string
    id_rs?: StringNullableFilter<"ml_booking"> | string | null
    lisensi?: StringNullableFilter<"ml_booking"> | string | null
    id_sp?: StringNullableFilter<"ml_booking"> | string | null
    hari?: Enumhari_enumNullableFilter<"ml_booking"> | $Enums.hari_enum | null
    gejala?: StringNullableFilter<"ml_booking"> | string | null
    start_consul?: DateTimeNullableFilter<"ml_booking"> | Date | string | null
    end_consul?: DateTimeNullableFilter<"ml_booking"> | Date | string | null
    duration?: IntNullableFilter<"ml_booking"> | number | null
  }

  export type ml_bookingOrderByWithRelationInput = {
    id?: SortOrder
    id_rs?: SortOrderInput | SortOrder
    lisensi?: SortOrderInput | SortOrder
    id_sp?: SortOrderInput | SortOrder
    hari?: SortOrderInput | SortOrder
    gejala?: SortOrderInput | SortOrder
    start_consul?: SortOrderInput | SortOrder
    end_consul?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
  }

  export type ml_bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ml_bookingWhereInput | ml_bookingWhereInput[]
    OR?: ml_bookingWhereInput[]
    NOT?: ml_bookingWhereInput | ml_bookingWhereInput[]
    id_rs?: StringNullableFilter<"ml_booking"> | string | null
    lisensi?: StringNullableFilter<"ml_booking"> | string | null
    id_sp?: StringNullableFilter<"ml_booking"> | string | null
    hari?: Enumhari_enumNullableFilter<"ml_booking"> | $Enums.hari_enum | null
    gejala?: StringNullableFilter<"ml_booking"> | string | null
    start_consul?: DateTimeNullableFilter<"ml_booking"> | Date | string | null
    end_consul?: DateTimeNullableFilter<"ml_booking"> | Date | string | null
    duration?: IntNullableFilter<"ml_booking"> | number | null
  }, "id">

  export type ml_bookingOrderByWithAggregationInput = {
    id?: SortOrder
    id_rs?: SortOrderInput | SortOrder
    lisensi?: SortOrderInput | SortOrder
    id_sp?: SortOrderInput | SortOrder
    hari?: SortOrderInput | SortOrder
    gejala?: SortOrderInput | SortOrder
    start_consul?: SortOrderInput | SortOrder
    end_consul?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: ml_bookingCountOrderByAggregateInput
    _avg?: ml_bookingAvgOrderByAggregateInput
    _max?: ml_bookingMaxOrderByAggregateInput
    _min?: ml_bookingMinOrderByAggregateInput
    _sum?: ml_bookingSumOrderByAggregateInput
  }

  export type ml_bookingScalarWhereWithAggregatesInput = {
    AND?: ml_bookingScalarWhereWithAggregatesInput | ml_bookingScalarWhereWithAggregatesInput[]
    OR?: ml_bookingScalarWhereWithAggregatesInput[]
    NOT?: ml_bookingScalarWhereWithAggregatesInput | ml_bookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ml_booking"> | string
    id_rs?: StringNullableWithAggregatesFilter<"ml_booking"> | string | null
    lisensi?: StringNullableWithAggregatesFilter<"ml_booking"> | string | null
    id_sp?: StringNullableWithAggregatesFilter<"ml_booking"> | string | null
    hari?: Enumhari_enumNullableWithAggregatesFilter<"ml_booking"> | $Enums.hari_enum | null
    gejala?: StringNullableWithAggregatesFilter<"ml_booking"> | string | null
    start_consul?: DateTimeNullableWithAggregatesFilter<"ml_booking"> | Date | string | null
    end_consul?: DateTimeNullableWithAggregatesFilter<"ml_booking"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"ml_booking"> | number | null
  }

  export type practicesWhereInput = {
    AND?: practicesWhereInput | practicesWhereInput[]
    OR?: practicesWhereInput[]
    NOT?: practicesWhereInput | practicesWhereInput[]
    id_prak?: StringFilter<"practices"> | string
    id_rs?: StringFilter<"practices"> | string
    id_sp?: StringFilter<"practices"> | string
    lisensi?: StringFilter<"practices"> | string
    id_sched?: StringFilter<"practices"> | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    schedules?: XOR<SchedulesScalarRelationFilter, schedulesWhereInput>
    specialists?: XOR<SpecialistsScalarRelationFilter, specialistsWhereInput>
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
    slot?: SlotListRelationFilter
  }

  export type practicesOrderByWithRelationInput = {
    id_prak?: SortOrder
    id_rs?: SortOrder
    id_sp?: SortOrder
    lisensi?: SortOrder
    id_sched?: SortOrder
    hospitals?: hospitalsOrderByWithRelationInput
    schedules?: schedulesOrderByWithRelationInput
    specialists?: specialistsOrderByWithRelationInput
    doctors?: doctorsOrderByWithRelationInput
    slot?: slotOrderByRelationAggregateInput
  }

  export type practicesWhereUniqueInput = Prisma.AtLeast<{
    id_prak?: string
    AND?: practicesWhereInput | practicesWhereInput[]
    OR?: practicesWhereInput[]
    NOT?: practicesWhereInput | practicesWhereInput[]
    id_rs?: StringFilter<"practices"> | string
    id_sp?: StringFilter<"practices"> | string
    lisensi?: StringFilter<"practices"> | string
    id_sched?: StringFilter<"practices"> | string
    hospitals?: XOR<HospitalsScalarRelationFilter, hospitalsWhereInput>
    schedules?: XOR<SchedulesScalarRelationFilter, schedulesWhereInput>
    specialists?: XOR<SpecialistsScalarRelationFilter, specialistsWhereInput>
    doctors?: XOR<DoctorsScalarRelationFilter, doctorsWhereInput>
    slot?: SlotListRelationFilter
  }, "id_prak">

  export type practicesOrderByWithAggregationInput = {
    id_prak?: SortOrder
    id_rs?: SortOrder
    id_sp?: SortOrder
    lisensi?: SortOrder
    id_sched?: SortOrder
    _count?: practicesCountOrderByAggregateInput
    _max?: practicesMaxOrderByAggregateInput
    _min?: practicesMinOrderByAggregateInput
  }

  export type practicesScalarWhereWithAggregatesInput = {
    AND?: practicesScalarWhereWithAggregatesInput | practicesScalarWhereWithAggregatesInput[]
    OR?: practicesScalarWhereWithAggregatesInput[]
    NOT?: practicesScalarWhereWithAggregatesInput | practicesScalarWhereWithAggregatesInput[]
    id_prak?: StringWithAggregatesFilter<"practices"> | string
    id_rs?: StringWithAggregatesFilter<"practices"> | string
    id_sp?: StringWithAggregatesFilter<"practices"> | string
    lisensi?: StringWithAggregatesFilter<"practices"> | string
    id_sched?: StringWithAggregatesFilter<"practices"> | string
  }

  export type schedulesWhereInput = {
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    id_sched?: StringFilter<"schedules"> | string
    hari?: Enumhari_enumFilter<"schedules"> | $Enums.hari_enum
    start_session?: StringFilter<"schedules"> | string
    end_session?: StringFilter<"schedules"> | string
    create_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    update_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    practices?: PracticesListRelationFilter
  }

  export type schedulesOrderByWithRelationInput = {
    id_sched?: SortOrder
    hari?: SortOrder
    start_session?: SortOrder
    end_session?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    practices?: practicesOrderByRelationAggregateInput
  }

  export type schedulesWhereUniqueInput = Prisma.AtLeast<{
    id_sched?: string
    AND?: schedulesWhereInput | schedulesWhereInput[]
    OR?: schedulesWhereInput[]
    NOT?: schedulesWhereInput | schedulesWhereInput[]
    hari?: Enumhari_enumFilter<"schedules"> | $Enums.hari_enum
    start_session?: StringFilter<"schedules"> | string
    end_session?: StringFilter<"schedules"> | string
    create_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    update_at?: DateTimeNullableFilter<"schedules"> | Date | string | null
    practices?: PracticesListRelationFilter
  }, "id_sched">

  export type schedulesOrderByWithAggregationInput = {
    id_sched?: SortOrder
    hari?: SortOrder
    start_session?: SortOrder
    end_session?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: schedulesCountOrderByAggregateInput
    _max?: schedulesMaxOrderByAggregateInput
    _min?: schedulesMinOrderByAggregateInput
  }

  export type schedulesScalarWhereWithAggregatesInput = {
    AND?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    OR?: schedulesScalarWhereWithAggregatesInput[]
    NOT?: schedulesScalarWhereWithAggregatesInput | schedulesScalarWhereWithAggregatesInput[]
    id_sched?: StringWithAggregatesFilter<"schedules"> | string
    hari?: Enumhari_enumWithAggregatesFilter<"schedules"> | $Enums.hari_enum
    start_session?: StringWithAggregatesFilter<"schedules"> | string
    end_session?: StringWithAggregatesFilter<"schedules"> | string
    create_at?: DateTimeNullableWithAggregatesFilter<"schedules"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"schedules"> | Date | string | null
  }

  export type slotWhereInput = {
    AND?: slotWhereInput | slotWhereInput[]
    OR?: slotWhereInput[]
    NOT?: slotWhereInput | slotWhereInput[]
    id_slot?: StringFilter<"slot"> | string
    tanggal?: DateTimeNullableFilter<"slot"> | Date | string | null
    total?: IntNullableFilter<"slot"> | number | null
    sisa?: IntNullableFilter<"slot"> | number | null
    create_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    update_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    id_prak?: StringNullableFilter<"slot"> | string | null
    bookings?: BookingsListRelationFilter
    practices?: XOR<PracticesNullableScalarRelationFilter, practicesWhereInput> | null
  }

  export type slotOrderByWithRelationInput = {
    id_slot?: SortOrder
    tanggal?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    sisa?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id_prak?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    practices?: practicesOrderByWithRelationInput
  }

  export type slotWhereUniqueInput = Prisma.AtLeast<{
    id_slot?: string
    AND?: slotWhereInput | slotWhereInput[]
    OR?: slotWhereInput[]
    NOT?: slotWhereInput | slotWhereInput[]
    tanggal?: DateTimeNullableFilter<"slot"> | Date | string | null
    total?: IntNullableFilter<"slot"> | number | null
    sisa?: IntNullableFilter<"slot"> | number | null
    create_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    update_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    id_prak?: StringNullableFilter<"slot"> | string | null
    bookings?: BookingsListRelationFilter
    practices?: XOR<PracticesNullableScalarRelationFilter, practicesWhereInput> | null
  }, "id_slot">

  export type slotOrderByWithAggregationInput = {
    id_slot?: SortOrder
    tanggal?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    sisa?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    id_prak?: SortOrderInput | SortOrder
    _count?: slotCountOrderByAggregateInput
    _avg?: slotAvgOrderByAggregateInput
    _max?: slotMaxOrderByAggregateInput
    _min?: slotMinOrderByAggregateInput
    _sum?: slotSumOrderByAggregateInput
  }

  export type slotScalarWhereWithAggregatesInput = {
    AND?: slotScalarWhereWithAggregatesInput | slotScalarWhereWithAggregatesInput[]
    OR?: slotScalarWhereWithAggregatesInput[]
    NOT?: slotScalarWhereWithAggregatesInput | slotScalarWhereWithAggregatesInput[]
    id_slot?: StringWithAggregatesFilter<"slot"> | string
    tanggal?: DateTimeNullableWithAggregatesFilter<"slot"> | Date | string | null
    total?: IntNullableWithAggregatesFilter<"slot"> | number | null
    sisa?: IntNullableWithAggregatesFilter<"slot"> | number | null
    create_at?: DateTimeNullableWithAggregatesFilter<"slot"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"slot"> | Date | string | null
    id_prak?: StringNullableWithAggregatesFilter<"slot"> | string | null
  }

  export type specialistsWhereInput = {
    AND?: specialistsWhereInput | specialistsWhereInput[]
    OR?: specialistsWhereInput[]
    NOT?: specialistsWhereInput | specialistsWhereInput[]
    id_sp?: StringFilter<"specialists"> | string
    spesialis?: StringFilter<"specialists"> | string
    create_at?: DateTimeNullableFilter<"specialists"> | Date | string | null
    update_at?: DateTimeNullableFilter<"specialists"> | Date | string | null
    detail_sp?: Detail_spListRelationFilter
    practices?: PracticesListRelationFilter
  }

  export type specialistsOrderByWithRelationInput = {
    id_sp?: SortOrder
    spesialis?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    detail_sp?: detail_spOrderByRelationAggregateInput
    practices?: practicesOrderByRelationAggregateInput
  }

  export type specialistsWhereUniqueInput = Prisma.AtLeast<{
    id_sp?: string
    spesialis?: string
    AND?: specialistsWhereInput | specialistsWhereInput[]
    OR?: specialistsWhereInput[]
    NOT?: specialistsWhereInput | specialistsWhereInput[]
    create_at?: DateTimeNullableFilter<"specialists"> | Date | string | null
    update_at?: DateTimeNullableFilter<"specialists"> | Date | string | null
    detail_sp?: Detail_spListRelationFilter
    practices?: PracticesListRelationFilter
  }, "id_sp" | "spesialis">

  export type specialistsOrderByWithAggregationInput = {
    id_sp?: SortOrder
    spesialis?: SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: specialistsCountOrderByAggregateInput
    _max?: specialistsMaxOrderByAggregateInput
    _min?: specialistsMinOrderByAggregateInput
  }

  export type specialistsScalarWhereWithAggregatesInput = {
    AND?: specialistsScalarWhereWithAggregatesInput | specialistsScalarWhereWithAggregatesInput[]
    OR?: specialistsScalarWhereWithAggregatesInput[]
    NOT?: specialistsScalarWhereWithAggregatesInput | specialistsScalarWhereWithAggregatesInput[]
    id_sp?: StringWithAggregatesFilter<"specialists"> | string
    spesialis?: StringWithAggregatesFilter<"specialists"> | string
    create_at?: DateTimeNullableWithAggregatesFilter<"specialists"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"specialists"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    nama?: StringFilter<"users"> | string
    sandi?: StringFilter<"users"> | string
    id_bpjs?: StringNullableFilter<"users"> | string | null
    nik?: StringNullableFilter<"users"> | string | null
    gender?: Enumgender_enumFilter<"users"> | $Enums.gender_enum
    tgl_lahir?: DateTimeNullableFilter<"users"> | Date | string | null
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    role?: StringNullableFilter<"users"> | string | null
    create_at?: DateTimeNullableFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    bookings?: BookingsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    sandi?: SortOrder
    id_bpjs?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nama?: StringFilter<"users"> | string
    sandi?: StringFilter<"users"> | string
    id_bpjs?: StringNullableFilter<"users"> | string | null
    nik?: StringNullableFilter<"users"> | string | null
    gender?: Enumgender_enumFilter<"users"> | $Enums.gender_enum
    tgl_lahir?: DateTimeNullableFilter<"users"> | Date | string | null
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    role?: StringNullableFilter<"users"> | string | null
    create_at?: DateTimeNullableFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    bookings?: BookingsListRelationFilter
  }, "id_user" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    sandi?: SortOrder
    id_bpjs?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    update_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    nama?: StringWithAggregatesFilter<"users"> | string
    sandi?: StringWithAggregatesFilter<"users"> | string
    id_bpjs?: StringNullableWithAggregatesFilter<"users"> | string | null
    nik?: StringNullableWithAggregatesFilter<"users"> | string | null
    gender?: Enumgender_enumWithAggregatesFilter<"users"> | $Enums.gender_enum
    tgl_lahir?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    foto?: BytesNullableWithAggregatesFilter<"users"> | Uint8Array | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    create_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    update_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id_kota?: IntFilter<"cities"> | number
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    hospitals?: HospitalsListRelationFilter
  }

  export type citiesOrderByWithRelationInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    provinces?: provincesOrderByWithRelationInput
    hospitals?: hospitalsOrderByRelationAggregateInput
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id_kota?: number
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    hospitals?: HospitalsListRelationFilter
  }, "id_kota">

  export type citiesOrderByWithAggregationInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id_kota?: IntWithAggregatesFilter<"cities"> | number
    nama_kota?: StringWithAggregatesFilter<"cities"> | string
    id_prov?: IntWithAggregatesFilter<"cities"> | number
  }

  export type provincesWhereInput = {
    AND?: provincesWhereInput | provincesWhereInput[]
    OR?: provincesWhereInput[]
    NOT?: provincesWhereInput | provincesWhereInput[]
    id_prov?: IntFilter<"provinces"> | number
    nama_prov?: StringFilter<"provinces"> | string
    cities?: CitiesListRelationFilter
    hospitals?: HospitalsListRelationFilter
  }

  export type provincesOrderByWithRelationInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    cities?: citiesOrderByRelationAggregateInput
    hospitals?: hospitalsOrderByRelationAggregateInput
  }

  export type provincesWhereUniqueInput = Prisma.AtLeast<{
    id_prov?: number
    nama_prov?: string
    AND?: provincesWhereInput | provincesWhereInput[]
    OR?: provincesWhereInput[]
    NOT?: provincesWhereInput | provincesWhereInput[]
    cities?: CitiesListRelationFilter
    hospitals?: HospitalsListRelationFilter
  }, "id_prov" | "nama_prov">

  export type provincesOrderByWithAggregationInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    _count?: provincesCountOrderByAggregateInput
    _avg?: provincesAvgOrderByAggregateInput
    _max?: provincesMaxOrderByAggregateInput
    _min?: provincesMinOrderByAggregateInput
    _sum?: provincesSumOrderByAggregateInput
  }

  export type provincesScalarWhereWithAggregatesInput = {
    AND?: provincesScalarWhereWithAggregatesInput | provincesScalarWhereWithAggregatesInput[]
    OR?: provincesScalarWhereWithAggregatesInput[]
    NOT?: provincesScalarWhereWithAggregatesInput | provincesScalarWhereWithAggregatesInput[]
    id_prov?: IntWithAggregatesFilter<"provinces"> | number
    nama_prov?: StringWithAggregatesFilter<"provinces"> | string
  }

  export type bookingsCreateInput = {
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    slot: slotCreateNestedOneWithoutBookingsInput
    users: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id_user: string
    id_slot: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsUpdateInput = {
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slot?: slotUpdateOneRequiredWithoutBookingsNestedInput
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_slot?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManyInput = {
    id_user: string
    id_slot: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsUpdateManyMutationInput = {
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_slot?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detail_spCreateInput = {
    specialists: specialistsCreateNestedOneWithoutDetail_spInput
    doctors: doctorsCreateNestedOneWithoutDetail_spInput
  }

  export type detail_spUncheckedCreateInput = {
    lisensi: string
    id_sp: string
  }

  export type detail_spUpdateInput = {
    specialists?: specialistsUpdateOneRequiredWithoutDetail_spNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutDetail_spNestedInput
  }

  export type detail_spUncheckedUpdateInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
  }

  export type detail_spCreateManyInput = {
    lisensi: string
    id_sp: string
  }

  export type detail_spUpdateManyMutationInput = {

  }

  export type detail_spUncheckedUpdateManyInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
  }

  export type doctorsCreateInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spCreateNestedManyWithoutDoctorsInput
    practices?: practicesCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spUncheckedCreateNestedManyWithoutDoctorsInput
    practices?: practicesUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUpdateInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUpdateManyWithoutDoctorsNestedInput
    practices?: practicesUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUncheckedUpdateManyWithoutDoctorsNestedInput
    practices?: practicesUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsCreateManyInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type doctorsUpdateManyMutationInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type doctorsUncheckedUpdateManyInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hospitalsCreateInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutHospitalsInput
    provinces?: provincesCreateNestedOneWithoutHospitalsInput
    practices?: practicesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_kota?: number | null
    id_prov?: number | null
    practices?: practicesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUpdateInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutHospitalsNestedInput
    provinces?: provincesUpdateOneWithoutHospitalsNestedInput
    practices?: practicesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    practices?: practicesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsCreateManyInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_kota?: number | null
    id_prov?: number | null
  }

  export type hospitalsUpdateManyMutationInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hospitalsUncheckedUpdateManyInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ml_bookingCreateInput = {
    id: string
    id_rs?: string | null
    lisensi?: string | null
    id_sp?: string | null
    hari?: $Enums.hari_enum | null
    gejala?: string | null
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    duration?: number | null
  }

  export type ml_bookingUncheckedCreateInput = {
    id: string
    id_rs?: string | null
    lisensi?: string | null
    id_sp?: string | null
    hari?: $Enums.hari_enum | null
    gejala?: string | null
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    duration?: number | null
  }

  export type ml_bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_rs?: NullableStringFieldUpdateOperationsInput | string | null
    lisensi?: NullableStringFieldUpdateOperationsInput | string | null
    id_sp?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: NullableEnumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ml_bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_rs?: NullableStringFieldUpdateOperationsInput | string | null
    lisensi?: NullableStringFieldUpdateOperationsInput | string | null
    id_sp?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: NullableEnumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ml_bookingCreateManyInput = {
    id: string
    id_rs?: string | null
    lisensi?: string | null
    id_sp?: string | null
    hari?: $Enums.hari_enum | null
    gejala?: string | null
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    duration?: number | null
  }

  export type ml_bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_rs?: NullableStringFieldUpdateOperationsInput | string | null
    lisensi?: NullableStringFieldUpdateOperationsInput | string | null
    id_sp?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: NullableEnumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ml_bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_rs?: NullableStringFieldUpdateOperationsInput | string | null
    lisensi?: NullableStringFieldUpdateOperationsInput | string | null
    id_sp?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: NullableEnumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type practicesCreateInput = {
    id_prak: string
    hospitals: hospitalsCreateNestedOneWithoutPracticesInput
    schedules: schedulesCreateNestedOneWithoutPracticesInput
    specialists: specialistsCreateNestedOneWithoutPracticesInput
    doctors: doctorsCreateNestedOneWithoutPracticesInput
    slot?: slotCreateNestedManyWithoutPracticesInput
  }

  export type practicesUncheckedCreateInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
    id_sched: string
    slot?: slotUncheckedCreateNestedManyWithoutPracticesInput
  }

  export type practicesUpdateInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateOneRequiredWithoutPracticesNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutPracticesNestedInput
    specialists?: specialistsUpdateOneRequiredWithoutPracticesNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutPracticesNestedInput
    slot?: slotUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
    slot?: slotUncheckedUpdateManyWithoutPracticesNestedInput
  }

  export type practicesCreateManyInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
    id_sched: string
  }

  export type practicesUpdateManyMutationInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
  }

  export type practicesUncheckedUpdateManyInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
  }

  export type schedulesCreateInput = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesCreateNestedManyWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateInput = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesUncheckedCreateNestedManyWithoutSchedulesInput
  }

  export type schedulesUpdateInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUpdateManyWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUncheckedUpdateManyWithoutSchedulesNestedInput
  }

  export type schedulesCreateManyInput = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type schedulesUpdateManyMutationInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesUncheckedUpdateManyInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type slotCreateInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutSlotInput
    practices?: practicesCreateNestedOneWithoutSlotInput
  }

  export type slotUncheckedCreateInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_prak?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSlotInput
  }

  export type slotUpdateInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutSlotNestedInput
    practices?: practicesUpdateOneWithoutSlotNestedInput
  }

  export type slotUncheckedUpdateInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prak?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type slotCreateManyInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_prak?: string | null
  }

  export type slotUpdateManyMutationInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type slotUncheckedUpdateManyInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prak?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type specialistsCreateInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spCreateNestedManyWithoutSpecialistsInput
    practices?: practicesCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsUncheckedCreateInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spUncheckedCreateNestedManyWithoutSpecialistsInput
    practices?: practicesUncheckedCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsUpdateInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUpdateManyWithoutSpecialistsNestedInput
    practices?: practicesUpdateManyWithoutSpecialistsNestedInput
  }

  export type specialistsUncheckedUpdateInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUncheckedUpdateManyWithoutSpecialistsNestedInput
    practices?: practicesUncheckedUpdateManyWithoutSpecialistsNestedInput
  }

  export type specialistsCreateManyInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type specialistsUpdateManyMutationInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type specialistsUncheckedUpdateManyInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs?: string | null
    nik?: string | null
    gender: $Enums.gender_enum
    tgl_lahir?: Date | string | null
    foto?: Uint8Array | null
    role?: string | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs?: string | null
    nik?: string | null
    gender: $Enums.gender_enum
    tgl_lahir?: Date | string | null
    foto?: Uint8Array | null
    role?: string | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs?: string | null
    nik?: string | null
    gender: $Enums.gender_enum
    tgl_lahir?: Date | string | null
    foto?: Uint8Array | null
    role?: string | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesCreateInput = {
    nama_kota: string
    provinces: provincesCreateNestedOneWithoutCitiesInput
    hospitals?: hospitalsCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    hospitals?: hospitalsUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesUpdateInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
    hospitals?: hospitalsUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    hospitals?: hospitalsUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesCreateManyInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
  }

  export type citiesUpdateManyMutationInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateManyInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
  }

  export type provincesCreateInput = {
    nama_prov: string
    cities?: citiesCreateNestedManyWithoutProvincesInput
    hospitals?: hospitalsCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateInput = {
    id_prov?: number
    nama_prov: string
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
    hospitals?: hospitalsUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesUpdateInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    cities?: citiesUpdateManyWithoutProvincesNestedInput
    hospitals?: hospitalsUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    cities?: citiesUncheckedUpdateManyWithoutProvincesNestedInput
    hospitals?: hospitalsUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type provincesCreateManyInput = {
    id_prov?: number
    nama_prov: string
  }

  export type provincesUpdateManyMutationInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
  }

  export type provincesUncheckedUpdateManyInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SlotScalarRelationFilter = {
    is?: slotWhereInput
    isNot?: slotWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingsId_userId_slotCompoundUniqueInput = {
    id_user: string
    id_slot: string
  }

  export type bookingsCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_slot?: SortOrder
    no_antrian?: SortOrder
    status?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    gejala?: SortOrder
    durasi?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    no_antrian?: SortOrder
    durasi?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_slot?: SortOrder
    no_antrian?: SortOrder
    status?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    gejala?: SortOrder
    durasi?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_slot?: SortOrder
    no_antrian?: SortOrder
    status?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    gejala?: SortOrder
    durasi?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    no_antrian?: SortOrder
    durasi?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SpecialistsScalarRelationFilter = {
    is?: specialistsWhereInput
    isNot?: specialistsWhereInput
  }

  export type DoctorsScalarRelationFilter = {
    is?: doctorsWhereInput
    isNot?: doctorsWhereInput
  }

  export type detail_spLisensiId_spCompoundUniqueInput = {
    lisensi: string
    id_sp: string
  }

  export type detail_spCountOrderByAggregateInput = {
    lisensi?: SortOrder
    id_sp?: SortOrder
  }

  export type detail_spMaxOrderByAggregateInput = {
    lisensi?: SortOrder
    id_sp?: SortOrder
  }

  export type detail_spMinOrderByAggregateInput = {
    lisensi?: SortOrder
    id_sp?: SortOrder
  }

  export type Enumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumstatus_doctorFilter<$PrismaModel = never> = {
    equals?: $Enums.status_doctor | Enumstatus_doctorFieldRefInput<$PrismaModel>
    in?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_doctorFilter<$PrismaModel> | $Enums.status_doctor
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type Detail_spListRelationFilter = {
    every?: detail_spWhereInput
    some?: detail_spWhereInput
    none?: detail_spWhereInput
  }

  export type PracticesListRelationFilter = {
    every?: practicesWhereInput
    some?: practicesWhereInput
    none?: practicesWhereInput
  }

  export type detail_spOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type practicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorsCountOrderByAggregateInput = {
    lisensi?: SortOrder
    nama_dokter?: SortOrder
    email?: SortOrder
    sandi_dokter?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    foto?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type doctorsMaxOrderByAggregateInput = {
    lisensi?: SortOrder
    nama_dokter?: SortOrder
    email?: SortOrder
    sandi_dokter?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    foto?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type doctorsMinOrderByAggregateInput = {
    lisensi?: SortOrder
    nama_dokter?: SortOrder
    email?: SortOrder
    sandi_dokter?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    status?: SortOrder
    foto?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type Enumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumstatus_doctorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_doctor | Enumstatus_doctorFieldRefInput<$PrismaModel>
    in?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_doctorWithAggregatesFilter<$PrismaModel> | $Enums.status_doctor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_doctorFilter<$PrismaModel>
    _max?: NestedEnumstatus_doctorFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type Enumtipe_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipe_enum | Enumtipe_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtipe_enumFilter<$PrismaModel> | $Enums.tipe_enum
  }

  export type Enumstatus_rsFilter<$PrismaModel = never> = {
    equals?: $Enums.status_rs | Enumstatus_rsFieldRefInput<$PrismaModel>
    in?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_rsFilter<$PrismaModel> | $Enums.status_rs
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CitiesNullableScalarRelationFilter = {
    is?: citiesWhereInput | null
    isNot?: citiesWhereInput | null
  }

  export type ProvincesNullableScalarRelationFilter = {
    is?: provincesWhereInput | null
    isNot?: provincesWhereInput | null
  }

  export type hospitalsCountOrderByAggregateInput = {
    id_rs?: SortOrder
    sandi_admin?: SortOrder
    nama_rs?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type hospitalsAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type hospitalsMaxOrderByAggregateInput = {
    id_rs?: SortOrder
    sandi_admin?: SortOrder
    nama_rs?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type hospitalsMinOrderByAggregateInput = {
    id_rs?: SortOrder
    sandi_admin?: SortOrder
    nama_rs?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type hospitalsSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type Enumtipe_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipe_enum | Enumtipe_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtipe_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipe_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipe_enumFilter<$PrismaModel>
    _max?: NestedEnumtipe_enumFilter<$PrismaModel>
  }

  export type Enumstatus_rsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_rs | Enumstatus_rsFieldRefInput<$PrismaModel>
    in?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_rsWithAggregatesFilter<$PrismaModel> | $Enums.status_rs
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_rsFilter<$PrismaModel>
    _max?: NestedEnumstatus_rsFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumhari_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhari_enumNullableFilter<$PrismaModel> | $Enums.hari_enum | null
  }

  export type ml_bookingCountOrderByAggregateInput = {
    id?: SortOrder
    id_rs?: SortOrder
    lisensi?: SortOrder
    id_sp?: SortOrder
    hari?: SortOrder
    gejala?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    duration?: SortOrder
  }

  export type ml_bookingAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ml_bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    id_rs?: SortOrder
    lisensi?: SortOrder
    id_sp?: SortOrder
    hari?: SortOrder
    gejala?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    duration?: SortOrder
  }

  export type ml_bookingMinOrderByAggregateInput = {
    id?: SortOrder
    id_rs?: SortOrder
    lisensi?: SortOrder
    id_sp?: SortOrder
    hari?: SortOrder
    gejala?: SortOrder
    start_consul?: SortOrder
    end_consul?: SortOrder
    duration?: SortOrder
  }

  export type ml_bookingSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type Enumhari_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhari_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.hari_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumhari_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumhari_enumNullableFilter<$PrismaModel>
  }

  export type HospitalsScalarRelationFilter = {
    is?: hospitalsWhereInput
    isNot?: hospitalsWhereInput
  }

  export type SchedulesScalarRelationFilter = {
    is?: schedulesWhereInput
    isNot?: schedulesWhereInput
  }

  export type SlotListRelationFilter = {
    every?: slotWhereInput
    some?: slotWhereInput
    none?: slotWhereInput
  }

  export type slotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type practicesCountOrderByAggregateInput = {
    id_prak?: SortOrder
    id_rs?: SortOrder
    id_sp?: SortOrder
    lisensi?: SortOrder
    id_sched?: SortOrder
  }

  export type practicesMaxOrderByAggregateInput = {
    id_prak?: SortOrder
    id_rs?: SortOrder
    id_sp?: SortOrder
    lisensi?: SortOrder
    id_sched?: SortOrder
  }

  export type practicesMinOrderByAggregateInput = {
    id_prak?: SortOrder
    id_rs?: SortOrder
    id_sp?: SortOrder
    lisensi?: SortOrder
    id_sched?: SortOrder
  }

  export type Enumhari_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel>
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumhari_enumFilter<$PrismaModel> | $Enums.hari_enum
  }

  export type schedulesCountOrderByAggregateInput = {
    id_sched?: SortOrder
    hari?: SortOrder
    start_session?: SortOrder
    end_session?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type schedulesMaxOrderByAggregateInput = {
    id_sched?: SortOrder
    hari?: SortOrder
    start_session?: SortOrder
    end_session?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type schedulesMinOrderByAggregateInput = {
    id_sched?: SortOrder
    hari?: SortOrder
    start_session?: SortOrder
    end_session?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type Enumhari_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel>
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumhari_enumWithAggregatesFilter<$PrismaModel> | $Enums.hari_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhari_enumFilter<$PrismaModel>
    _max?: NestedEnumhari_enumFilter<$PrismaModel>
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type PracticesNullableScalarRelationFilter = {
    is?: practicesWhereInput | null
    isNot?: practicesWhereInput | null
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type slotCountOrderByAggregateInput = {
    id_slot?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    sisa?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_prak?: SortOrder
  }

  export type slotAvgOrderByAggregateInput = {
    total?: SortOrder
    sisa?: SortOrder
  }

  export type slotMaxOrderByAggregateInput = {
    id_slot?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    sisa?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_prak?: SortOrder
  }

  export type slotMinOrderByAggregateInput = {
    id_slot?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    sisa?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    id_prak?: SortOrder
  }

  export type slotSumOrderByAggregateInput = {
    total?: SortOrder
    sisa?: SortOrder
  }

  export type specialistsCountOrderByAggregateInput = {
    id_sp?: SortOrder
    spesialis?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type specialistsMaxOrderByAggregateInput = {
    id_sp?: SortOrder
    spesialis?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type specialistsMinOrderByAggregateInput = {
    id_sp?: SortOrder
    spesialis?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    sandi?: SortOrder
    id_bpjs?: SortOrder
    nik?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    foto?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    sandi?: SortOrder
    id_bpjs?: SortOrder
    nik?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    foto?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    sandi?: SortOrder
    id_bpjs?: SortOrder
    nik?: SortOrder
    gender?: SortOrder
    tgl_lahir?: SortOrder
    foto?: SortOrder
    role?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type ProvincesScalarRelationFilter = {
    is?: provincesWhereInput
    isNot?: provincesWhereInput
  }

  export type HospitalsListRelationFilter = {
    every?: hospitalsWhereInput
    some?: hospitalsWhereInput
    none?: hospitalsWhereInput
  }

  export type hospitalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type CitiesListRelationFilter = {
    every?: citiesWhereInput
    some?: citiesWhereInput
    none?: citiesWhereInput
  }

  export type citiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provincesCountOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
  }

  export type provincesAvgOrderByAggregateInput = {
    id_prov?: SortOrder
  }

  export type provincesMaxOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
  }

  export type provincesMinOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
  }

  export type provincesSumOrderByAggregateInput = {
    id_prov?: SortOrder
  }

  export type slotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<slotCreateWithoutBookingsInput, slotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: slotCreateOrConnectWithoutBookingsInput
    connect?: slotWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type slotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<slotCreateWithoutBookingsInput, slotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: slotCreateOrConnectWithoutBookingsInput
    upsert?: slotUpsertWithoutBookingsInput
    connect?: slotWhereUniqueInput
    update?: XOR<XOR<slotUpdateToOneWithWhereWithoutBookingsInput, slotUpdateWithoutBookingsInput>, slotUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type specialistsCreateNestedOneWithoutDetail_spInput = {
    create?: XOR<specialistsCreateWithoutDetail_spInput, specialistsUncheckedCreateWithoutDetail_spInput>
    connectOrCreate?: specialistsCreateOrConnectWithoutDetail_spInput
    connect?: specialistsWhereUniqueInput
  }

  export type doctorsCreateNestedOneWithoutDetail_spInput = {
    create?: XOR<doctorsCreateWithoutDetail_spInput, doctorsUncheckedCreateWithoutDetail_spInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutDetail_spInput
    connect?: doctorsWhereUniqueInput
  }

  export type specialistsUpdateOneRequiredWithoutDetail_spNestedInput = {
    create?: XOR<specialistsCreateWithoutDetail_spInput, specialistsUncheckedCreateWithoutDetail_spInput>
    connectOrCreate?: specialistsCreateOrConnectWithoutDetail_spInput
    upsert?: specialistsUpsertWithoutDetail_spInput
    connect?: specialistsWhereUniqueInput
    update?: XOR<XOR<specialistsUpdateToOneWithWhereWithoutDetail_spInput, specialistsUpdateWithoutDetail_spInput>, specialistsUncheckedUpdateWithoutDetail_spInput>
  }

  export type doctorsUpdateOneRequiredWithoutDetail_spNestedInput = {
    create?: XOR<doctorsCreateWithoutDetail_spInput, doctorsUncheckedCreateWithoutDetail_spInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutDetail_spInput
    upsert?: doctorsUpsertWithoutDetail_spInput
    connect?: doctorsWhereUniqueInput
    update?: XOR<XOR<doctorsUpdateToOneWithWhereWithoutDetail_spInput, doctorsUpdateWithoutDetail_spInput>, doctorsUncheckedUpdateWithoutDetail_spInput>
  }

  export type detail_spCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput> | detail_spCreateWithoutDoctorsInput[] | detail_spUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutDoctorsInput | detail_spCreateOrConnectWithoutDoctorsInput[]
    createMany?: detail_spCreateManyDoctorsInputEnvelope
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
  }

  export type practicesCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput> | practicesCreateWithoutDoctorsInput[] | practicesUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutDoctorsInput | practicesCreateOrConnectWithoutDoctorsInput[]
    createMany?: practicesCreateManyDoctorsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type detail_spUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput> | detail_spCreateWithoutDoctorsInput[] | detail_spUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutDoctorsInput | detail_spCreateOrConnectWithoutDoctorsInput[]
    createMany?: detail_spCreateManyDoctorsInputEnvelope
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
  }

  export type practicesUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput> | practicesCreateWithoutDoctorsInput[] | practicesUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutDoctorsInput | practicesCreateOrConnectWithoutDoctorsInput[]
    createMany?: practicesCreateManyDoctorsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type Enumgender_enumFieldUpdateOperationsInput = {
    set?: $Enums.gender_enum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumstatus_doctorFieldUpdateOperationsInput = {
    set?: $Enums.status_doctor
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type detail_spUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput> | detail_spCreateWithoutDoctorsInput[] | detail_spUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutDoctorsInput | detail_spCreateOrConnectWithoutDoctorsInput[]
    upsert?: detail_spUpsertWithWhereUniqueWithoutDoctorsInput | detail_spUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: detail_spCreateManyDoctorsInputEnvelope
    set?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    disconnect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    delete?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    update?: detail_spUpdateWithWhereUniqueWithoutDoctorsInput | detail_spUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: detail_spUpdateManyWithWhereWithoutDoctorsInput | detail_spUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
  }

  export type practicesUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput> | practicesCreateWithoutDoctorsInput[] | practicesUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutDoctorsInput | practicesCreateOrConnectWithoutDoctorsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutDoctorsInput | practicesUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: practicesCreateManyDoctorsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutDoctorsInput | practicesUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutDoctorsInput | practicesUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type detail_spUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput> | detail_spCreateWithoutDoctorsInput[] | detail_spUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutDoctorsInput | detail_spCreateOrConnectWithoutDoctorsInput[]
    upsert?: detail_spUpsertWithWhereUniqueWithoutDoctorsInput | detail_spUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: detail_spCreateManyDoctorsInputEnvelope
    set?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    disconnect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    delete?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    update?: detail_spUpdateWithWhereUniqueWithoutDoctorsInput | detail_spUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: detail_spUpdateManyWithWhereWithoutDoctorsInput | detail_spUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
  }

  export type practicesUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput> | practicesCreateWithoutDoctorsInput[] | practicesUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutDoctorsInput | practicesCreateOrConnectWithoutDoctorsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutDoctorsInput | practicesUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: practicesCreateManyDoctorsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutDoctorsInput | practicesUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutDoctorsInput | practicesUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type citiesCreateNestedOneWithoutHospitalsInput = {
    create?: XOR<citiesCreateWithoutHospitalsInput, citiesUncheckedCreateWithoutHospitalsInput>
    connectOrCreate?: citiesCreateOrConnectWithoutHospitalsInput
    connect?: citiesWhereUniqueInput
  }

  export type provincesCreateNestedOneWithoutHospitalsInput = {
    create?: XOR<provincesCreateWithoutHospitalsInput, provincesUncheckedCreateWithoutHospitalsInput>
    connectOrCreate?: provincesCreateOrConnectWithoutHospitalsInput
    connect?: provincesWhereUniqueInput
  }

  export type practicesCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput> | practicesCreateWithoutHospitalsInput[] | practicesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutHospitalsInput | practicesCreateOrConnectWithoutHospitalsInput[]
    createMany?: practicesCreateManyHospitalsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type practicesUncheckedCreateNestedManyWithoutHospitalsInput = {
    create?: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput> | practicesCreateWithoutHospitalsInput[] | practicesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutHospitalsInput | practicesCreateOrConnectWithoutHospitalsInput[]
    createMany?: practicesCreateManyHospitalsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type Enumtipe_enumFieldUpdateOperationsInput = {
    set?: $Enums.tipe_enum
  }

  export type Enumstatus_rsFieldUpdateOperationsInput = {
    set?: $Enums.status_rs
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type citiesUpdateOneWithoutHospitalsNestedInput = {
    create?: XOR<citiesCreateWithoutHospitalsInput, citiesUncheckedCreateWithoutHospitalsInput>
    connectOrCreate?: citiesCreateOrConnectWithoutHospitalsInput
    upsert?: citiesUpsertWithoutHospitalsInput
    disconnect?: citiesWhereInput | boolean
    delete?: citiesWhereInput | boolean
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutHospitalsInput, citiesUpdateWithoutHospitalsInput>, citiesUncheckedUpdateWithoutHospitalsInput>
  }

  export type provincesUpdateOneWithoutHospitalsNestedInput = {
    create?: XOR<provincesCreateWithoutHospitalsInput, provincesUncheckedCreateWithoutHospitalsInput>
    connectOrCreate?: provincesCreateOrConnectWithoutHospitalsInput
    upsert?: provincesUpsertWithoutHospitalsInput
    disconnect?: provincesWhereInput | boolean
    delete?: provincesWhereInput | boolean
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutHospitalsInput, provincesUpdateWithoutHospitalsInput>, provincesUncheckedUpdateWithoutHospitalsInput>
  }

  export type practicesUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput> | practicesCreateWithoutHospitalsInput[] | practicesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutHospitalsInput | practicesCreateOrConnectWithoutHospitalsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutHospitalsInput | practicesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: practicesCreateManyHospitalsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutHospitalsInput | practicesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutHospitalsInput | practicesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type practicesUncheckedUpdateManyWithoutHospitalsNestedInput = {
    create?: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput> | practicesCreateWithoutHospitalsInput[] | practicesUncheckedCreateWithoutHospitalsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutHospitalsInput | practicesCreateOrConnectWithoutHospitalsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutHospitalsInput | practicesUpsertWithWhereUniqueWithoutHospitalsInput[]
    createMany?: practicesCreateManyHospitalsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutHospitalsInput | practicesUpdateWithWhereUniqueWithoutHospitalsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutHospitalsInput | practicesUpdateManyWithWhereWithoutHospitalsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type NullableEnumhari_enumFieldUpdateOperationsInput = {
    set?: $Enums.hari_enum | null
  }

  export type hospitalsCreateNestedOneWithoutPracticesInput = {
    create?: XOR<hospitalsCreateWithoutPracticesInput, hospitalsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutPracticesInput
    connect?: hospitalsWhereUniqueInput
  }

  export type schedulesCreateNestedOneWithoutPracticesInput = {
    create?: XOR<schedulesCreateWithoutPracticesInput, schedulesUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: schedulesCreateOrConnectWithoutPracticesInput
    connect?: schedulesWhereUniqueInput
  }

  export type specialistsCreateNestedOneWithoutPracticesInput = {
    create?: XOR<specialistsCreateWithoutPracticesInput, specialistsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: specialistsCreateOrConnectWithoutPracticesInput
    connect?: specialistsWhereUniqueInput
  }

  export type doctorsCreateNestedOneWithoutPracticesInput = {
    create?: XOR<doctorsCreateWithoutPracticesInput, doctorsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutPracticesInput
    connect?: doctorsWhereUniqueInput
  }

  export type slotCreateNestedManyWithoutPracticesInput = {
    create?: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput> | slotCreateWithoutPracticesInput[] | slotUncheckedCreateWithoutPracticesInput[]
    connectOrCreate?: slotCreateOrConnectWithoutPracticesInput | slotCreateOrConnectWithoutPracticesInput[]
    createMany?: slotCreateManyPracticesInputEnvelope
    connect?: slotWhereUniqueInput | slotWhereUniqueInput[]
  }

  export type slotUncheckedCreateNestedManyWithoutPracticesInput = {
    create?: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput> | slotCreateWithoutPracticesInput[] | slotUncheckedCreateWithoutPracticesInput[]
    connectOrCreate?: slotCreateOrConnectWithoutPracticesInput | slotCreateOrConnectWithoutPracticesInput[]
    createMany?: slotCreateManyPracticesInputEnvelope
    connect?: slotWhereUniqueInput | slotWhereUniqueInput[]
  }

  export type hospitalsUpdateOneRequiredWithoutPracticesNestedInput = {
    create?: XOR<hospitalsCreateWithoutPracticesInput, hospitalsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: hospitalsCreateOrConnectWithoutPracticesInput
    upsert?: hospitalsUpsertWithoutPracticesInput
    connect?: hospitalsWhereUniqueInput
    update?: XOR<XOR<hospitalsUpdateToOneWithWhereWithoutPracticesInput, hospitalsUpdateWithoutPracticesInput>, hospitalsUncheckedUpdateWithoutPracticesInput>
  }

  export type schedulesUpdateOneRequiredWithoutPracticesNestedInput = {
    create?: XOR<schedulesCreateWithoutPracticesInput, schedulesUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: schedulesCreateOrConnectWithoutPracticesInput
    upsert?: schedulesUpsertWithoutPracticesInput
    connect?: schedulesWhereUniqueInput
    update?: XOR<XOR<schedulesUpdateToOneWithWhereWithoutPracticesInput, schedulesUpdateWithoutPracticesInput>, schedulesUncheckedUpdateWithoutPracticesInput>
  }

  export type specialistsUpdateOneRequiredWithoutPracticesNestedInput = {
    create?: XOR<specialistsCreateWithoutPracticesInput, specialistsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: specialistsCreateOrConnectWithoutPracticesInput
    upsert?: specialistsUpsertWithoutPracticesInput
    connect?: specialistsWhereUniqueInput
    update?: XOR<XOR<specialistsUpdateToOneWithWhereWithoutPracticesInput, specialistsUpdateWithoutPracticesInput>, specialistsUncheckedUpdateWithoutPracticesInput>
  }

  export type doctorsUpdateOneRequiredWithoutPracticesNestedInput = {
    create?: XOR<doctorsCreateWithoutPracticesInput, doctorsUncheckedCreateWithoutPracticesInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutPracticesInput
    upsert?: doctorsUpsertWithoutPracticesInput
    connect?: doctorsWhereUniqueInput
    update?: XOR<XOR<doctorsUpdateToOneWithWhereWithoutPracticesInput, doctorsUpdateWithoutPracticesInput>, doctorsUncheckedUpdateWithoutPracticesInput>
  }

  export type slotUpdateManyWithoutPracticesNestedInput = {
    create?: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput> | slotCreateWithoutPracticesInput[] | slotUncheckedCreateWithoutPracticesInput[]
    connectOrCreate?: slotCreateOrConnectWithoutPracticesInput | slotCreateOrConnectWithoutPracticesInput[]
    upsert?: slotUpsertWithWhereUniqueWithoutPracticesInput | slotUpsertWithWhereUniqueWithoutPracticesInput[]
    createMany?: slotCreateManyPracticesInputEnvelope
    set?: slotWhereUniqueInput | slotWhereUniqueInput[]
    disconnect?: slotWhereUniqueInput | slotWhereUniqueInput[]
    delete?: slotWhereUniqueInput | slotWhereUniqueInput[]
    connect?: slotWhereUniqueInput | slotWhereUniqueInput[]
    update?: slotUpdateWithWhereUniqueWithoutPracticesInput | slotUpdateWithWhereUniqueWithoutPracticesInput[]
    updateMany?: slotUpdateManyWithWhereWithoutPracticesInput | slotUpdateManyWithWhereWithoutPracticesInput[]
    deleteMany?: slotScalarWhereInput | slotScalarWhereInput[]
  }

  export type slotUncheckedUpdateManyWithoutPracticesNestedInput = {
    create?: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput> | slotCreateWithoutPracticesInput[] | slotUncheckedCreateWithoutPracticesInput[]
    connectOrCreate?: slotCreateOrConnectWithoutPracticesInput | slotCreateOrConnectWithoutPracticesInput[]
    upsert?: slotUpsertWithWhereUniqueWithoutPracticesInput | slotUpsertWithWhereUniqueWithoutPracticesInput[]
    createMany?: slotCreateManyPracticesInputEnvelope
    set?: slotWhereUniqueInput | slotWhereUniqueInput[]
    disconnect?: slotWhereUniqueInput | slotWhereUniqueInput[]
    delete?: slotWhereUniqueInput | slotWhereUniqueInput[]
    connect?: slotWhereUniqueInput | slotWhereUniqueInput[]
    update?: slotUpdateWithWhereUniqueWithoutPracticesInput | slotUpdateWithWhereUniqueWithoutPracticesInput[]
    updateMany?: slotUpdateManyWithWhereWithoutPracticesInput | slotUpdateManyWithWhereWithoutPracticesInput[]
    deleteMany?: slotScalarWhereInput | slotScalarWhereInput[]
  }

  export type practicesCreateNestedManyWithoutSchedulesInput = {
    create?: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput> | practicesCreateWithoutSchedulesInput[] | practicesUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSchedulesInput | practicesCreateOrConnectWithoutSchedulesInput[]
    createMany?: practicesCreateManySchedulesInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type practicesUncheckedCreateNestedManyWithoutSchedulesInput = {
    create?: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput> | practicesCreateWithoutSchedulesInput[] | practicesUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSchedulesInput | practicesCreateOrConnectWithoutSchedulesInput[]
    createMany?: practicesCreateManySchedulesInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type Enumhari_enumFieldUpdateOperationsInput = {
    set?: $Enums.hari_enum
  }

  export type practicesUpdateManyWithoutSchedulesNestedInput = {
    create?: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput> | practicesCreateWithoutSchedulesInput[] | practicesUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSchedulesInput | practicesCreateOrConnectWithoutSchedulesInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutSchedulesInput | practicesUpsertWithWhereUniqueWithoutSchedulesInput[]
    createMany?: practicesCreateManySchedulesInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutSchedulesInput | practicesUpdateWithWhereUniqueWithoutSchedulesInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutSchedulesInput | practicesUpdateManyWithWhereWithoutSchedulesInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type practicesUncheckedUpdateManyWithoutSchedulesNestedInput = {
    create?: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput> | practicesCreateWithoutSchedulesInput[] | practicesUncheckedCreateWithoutSchedulesInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSchedulesInput | practicesCreateOrConnectWithoutSchedulesInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutSchedulesInput | practicesUpsertWithWhereUniqueWithoutSchedulesInput[]
    createMany?: practicesCreateManySchedulesInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutSchedulesInput | practicesUpdateWithWhereUniqueWithoutSchedulesInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutSchedulesInput | practicesUpdateManyWithWhereWithoutSchedulesInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutSlotInput = {
    create?: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput> | bookingsCreateWithoutSlotInput[] | bookingsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSlotInput | bookingsCreateOrConnectWithoutSlotInput[]
    createMany?: bookingsCreateManySlotInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type practicesCreateNestedOneWithoutSlotInput = {
    create?: XOR<practicesCreateWithoutSlotInput, practicesUncheckedCreateWithoutSlotInput>
    connectOrCreate?: practicesCreateOrConnectWithoutSlotInput
    connect?: practicesWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput> | bookingsCreateWithoutSlotInput[] | bookingsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSlotInput | bookingsCreateOrConnectWithoutSlotInput[]
    createMany?: bookingsCreateManySlotInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutSlotNestedInput = {
    create?: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput> | bookingsCreateWithoutSlotInput[] | bookingsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSlotInput | bookingsCreateOrConnectWithoutSlotInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSlotInput | bookingsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: bookingsCreateManySlotInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSlotInput | bookingsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSlotInput | bookingsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type practicesUpdateOneWithoutSlotNestedInput = {
    create?: XOR<practicesCreateWithoutSlotInput, practicesUncheckedCreateWithoutSlotInput>
    connectOrCreate?: practicesCreateOrConnectWithoutSlotInput
    upsert?: practicesUpsertWithoutSlotInput
    disconnect?: practicesWhereInput | boolean
    delete?: practicesWhereInput | boolean
    connect?: practicesWhereUniqueInput
    update?: XOR<XOR<practicesUpdateToOneWithWhereWithoutSlotInput, practicesUpdateWithoutSlotInput>, practicesUncheckedUpdateWithoutSlotInput>
  }

  export type bookingsUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput> | bookingsCreateWithoutSlotInput[] | bookingsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSlotInput | bookingsCreateOrConnectWithoutSlotInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSlotInput | bookingsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: bookingsCreateManySlotInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSlotInput | bookingsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSlotInput | bookingsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type detail_spCreateNestedManyWithoutSpecialistsInput = {
    create?: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput> | detail_spCreateWithoutSpecialistsInput[] | detail_spUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutSpecialistsInput | detail_spCreateOrConnectWithoutSpecialistsInput[]
    createMany?: detail_spCreateManySpecialistsInputEnvelope
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
  }

  export type practicesCreateNestedManyWithoutSpecialistsInput = {
    create?: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput> | practicesCreateWithoutSpecialistsInput[] | practicesUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSpecialistsInput | practicesCreateOrConnectWithoutSpecialistsInput[]
    createMany?: practicesCreateManySpecialistsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type detail_spUncheckedCreateNestedManyWithoutSpecialistsInput = {
    create?: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput> | detail_spCreateWithoutSpecialistsInput[] | detail_spUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutSpecialistsInput | detail_spCreateOrConnectWithoutSpecialistsInput[]
    createMany?: detail_spCreateManySpecialistsInputEnvelope
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
  }

  export type practicesUncheckedCreateNestedManyWithoutSpecialistsInput = {
    create?: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput> | practicesCreateWithoutSpecialistsInput[] | practicesUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSpecialistsInput | practicesCreateOrConnectWithoutSpecialistsInput[]
    createMany?: practicesCreateManySpecialistsInputEnvelope
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
  }

  export type detail_spUpdateManyWithoutSpecialistsNestedInput = {
    create?: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput> | detail_spCreateWithoutSpecialistsInput[] | detail_spUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutSpecialistsInput | detail_spCreateOrConnectWithoutSpecialistsInput[]
    upsert?: detail_spUpsertWithWhereUniqueWithoutSpecialistsInput | detail_spUpsertWithWhereUniqueWithoutSpecialistsInput[]
    createMany?: detail_spCreateManySpecialistsInputEnvelope
    set?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    disconnect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    delete?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    update?: detail_spUpdateWithWhereUniqueWithoutSpecialistsInput | detail_spUpdateWithWhereUniqueWithoutSpecialistsInput[]
    updateMany?: detail_spUpdateManyWithWhereWithoutSpecialistsInput | detail_spUpdateManyWithWhereWithoutSpecialistsInput[]
    deleteMany?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
  }

  export type practicesUpdateManyWithoutSpecialistsNestedInput = {
    create?: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput> | practicesCreateWithoutSpecialistsInput[] | practicesUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSpecialistsInput | practicesCreateOrConnectWithoutSpecialistsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutSpecialistsInput | practicesUpsertWithWhereUniqueWithoutSpecialistsInput[]
    createMany?: practicesCreateManySpecialistsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutSpecialistsInput | practicesUpdateWithWhereUniqueWithoutSpecialistsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutSpecialistsInput | practicesUpdateManyWithWhereWithoutSpecialistsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type detail_spUncheckedUpdateManyWithoutSpecialistsNestedInput = {
    create?: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput> | detail_spCreateWithoutSpecialistsInput[] | detail_spUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: detail_spCreateOrConnectWithoutSpecialistsInput | detail_spCreateOrConnectWithoutSpecialistsInput[]
    upsert?: detail_spUpsertWithWhereUniqueWithoutSpecialistsInput | detail_spUpsertWithWhereUniqueWithoutSpecialistsInput[]
    createMany?: detail_spCreateManySpecialistsInputEnvelope
    set?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    disconnect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    delete?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    connect?: detail_spWhereUniqueInput | detail_spWhereUniqueInput[]
    update?: detail_spUpdateWithWhereUniqueWithoutSpecialistsInput | detail_spUpdateWithWhereUniqueWithoutSpecialistsInput[]
    updateMany?: detail_spUpdateManyWithWhereWithoutSpecialistsInput | detail_spUpdateManyWithWhereWithoutSpecialistsInput[]
    deleteMany?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
  }

  export type practicesUncheckedUpdateManyWithoutSpecialistsNestedInput = {
    create?: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput> | practicesCreateWithoutSpecialistsInput[] | practicesUncheckedCreateWithoutSpecialistsInput[]
    connectOrCreate?: practicesCreateOrConnectWithoutSpecialistsInput | practicesCreateOrConnectWithoutSpecialistsInput[]
    upsert?: practicesUpsertWithWhereUniqueWithoutSpecialistsInput | practicesUpsertWithWhereUniqueWithoutSpecialistsInput[]
    createMany?: practicesCreateManySpecialistsInputEnvelope
    set?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    disconnect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    delete?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    connect?: practicesWhereUniqueInput | practicesWhereUniqueInput[]
    update?: practicesUpdateWithWhereUniqueWithoutSpecialistsInput | practicesUpdateWithWhereUniqueWithoutSpecialistsInput[]
    updateMany?: practicesUpdateManyWithWhereWithoutSpecialistsInput | practicesUpdateManyWithWhereWithoutSpecialistsInput[]
    deleteMany?: practicesScalarWhereInput | practicesScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type provincesCreateNestedOneWithoutCitiesInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    connect?: provincesWhereUniqueInput
  }

  export type hospitalsCreateNestedManyWithoutCitiesInput = {
    create?: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput> | hospitalsCreateWithoutCitiesInput[] | hospitalsUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutCitiesInput | hospitalsCreateOrConnectWithoutCitiesInput[]
    createMany?: hospitalsCreateManyCitiesInputEnvelope
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
  }

  export type hospitalsUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput> | hospitalsCreateWithoutCitiesInput[] | hospitalsUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutCitiesInput | hospitalsCreateOrConnectWithoutCitiesInput[]
    createMany?: hospitalsCreateManyCitiesInputEnvelope
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
  }

  export type provincesUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    upsert?: provincesUpsertWithoutCitiesInput
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutCitiesInput, provincesUpdateWithoutCitiesInput>, provincesUncheckedUpdateWithoutCitiesInput>
  }

  export type hospitalsUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput> | hospitalsCreateWithoutCitiesInput[] | hospitalsUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutCitiesInput | hospitalsCreateOrConnectWithoutCitiesInput[]
    upsert?: hospitalsUpsertWithWhereUniqueWithoutCitiesInput | hospitalsUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: hospitalsCreateManyCitiesInputEnvelope
    set?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    disconnect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    delete?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    update?: hospitalsUpdateWithWhereUniqueWithoutCitiesInput | hospitalsUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: hospitalsUpdateManyWithWhereWithoutCitiesInput | hospitalsUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
  }

  export type hospitalsUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput> | hospitalsCreateWithoutCitiesInput[] | hospitalsUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutCitiesInput | hospitalsCreateOrConnectWithoutCitiesInput[]
    upsert?: hospitalsUpsertWithWhereUniqueWithoutCitiesInput | hospitalsUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: hospitalsCreateManyCitiesInputEnvelope
    set?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    disconnect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    delete?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    update?: hospitalsUpdateWithWhereUniqueWithoutCitiesInput | hospitalsUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: hospitalsUpdateManyWithWhereWithoutCitiesInput | hospitalsUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
  }

  export type citiesCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type hospitalsCreateNestedManyWithoutProvincesInput = {
    create?: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput> | hospitalsCreateWithoutProvincesInput[] | hospitalsUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutProvincesInput | hospitalsCreateOrConnectWithoutProvincesInput[]
    createMany?: hospitalsCreateManyProvincesInputEnvelope
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
  }

  export type citiesUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type hospitalsUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput> | hospitalsCreateWithoutProvincesInput[] | hospitalsUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutProvincesInput | hospitalsCreateOrConnectWithoutProvincesInput[]
    createMany?: hospitalsCreateManyProvincesInputEnvelope
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
  }

  export type citiesUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutProvincesInput | citiesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutProvincesInput | citiesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutProvincesInput | citiesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type hospitalsUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput> | hospitalsCreateWithoutProvincesInput[] | hospitalsUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutProvincesInput | hospitalsCreateOrConnectWithoutProvincesInput[]
    upsert?: hospitalsUpsertWithWhereUniqueWithoutProvincesInput | hospitalsUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: hospitalsCreateManyProvincesInputEnvelope
    set?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    disconnect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    delete?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    update?: hospitalsUpdateWithWhereUniqueWithoutProvincesInput | hospitalsUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: hospitalsUpdateManyWithWhereWithoutProvincesInput | hospitalsUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
  }

  export type citiesUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutProvincesInput | citiesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutProvincesInput | citiesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutProvincesInput | citiesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type hospitalsUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput> | hospitalsCreateWithoutProvincesInput[] | hospitalsUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: hospitalsCreateOrConnectWithoutProvincesInput | hospitalsCreateOrConnectWithoutProvincesInput[]
    upsert?: hospitalsUpsertWithWhereUniqueWithoutProvincesInput | hospitalsUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: hospitalsCreateManyProvincesInputEnvelope
    set?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    disconnect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    delete?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    connect?: hospitalsWhereUniqueInput | hospitalsWhereUniqueInput[]
    update?: hospitalsUpdateWithWhereUniqueWithoutProvincesInput | hospitalsUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: hospitalsUpdateManyWithWhereWithoutProvincesInput | hospitalsUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumstatus_doctorFilter<$PrismaModel = never> = {
    equals?: $Enums.status_doctor | Enumstatus_doctorFieldRefInput<$PrismaModel>
    in?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_doctorFilter<$PrismaModel> | $Enums.status_doctor
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedEnumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumstatus_doctorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_doctor | Enumstatus_doctorFieldRefInput<$PrismaModel>
    in?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_doctor[] | ListEnumstatus_doctorFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_doctorWithAggregatesFilter<$PrismaModel> | $Enums.status_doctor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_doctorFilter<$PrismaModel>
    _max?: NestedEnumstatus_doctorFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumtipe_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.tipe_enum | Enumtipe_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtipe_enumFilter<$PrismaModel> | $Enums.tipe_enum
  }

  export type NestedEnumstatus_rsFilter<$PrismaModel = never> = {
    equals?: $Enums.status_rs | Enumstatus_rsFieldRefInput<$PrismaModel>
    in?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_rsFilter<$PrismaModel> | $Enums.status_rs
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumtipe_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipe_enum | Enumtipe_enumFieldRefInput<$PrismaModel>
    in?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipe_enum[] | ListEnumtipe_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumtipe_enumWithAggregatesFilter<$PrismaModel> | $Enums.tipe_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipe_enumFilter<$PrismaModel>
    _max?: NestedEnumtipe_enumFilter<$PrismaModel>
  }

  export type NestedEnumstatus_rsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_rs | Enumstatus_rsFieldRefInput<$PrismaModel>
    in?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_rs[] | ListEnumstatus_rsFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_rsWithAggregatesFilter<$PrismaModel> | $Enums.status_rs
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_rsFilter<$PrismaModel>
    _max?: NestedEnumstatus_rsFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumhari_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhari_enumNullableFilter<$PrismaModel> | $Enums.hari_enum | null
  }

  export type NestedEnumhari_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumhari_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.hari_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumhari_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumhari_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumhari_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel>
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumhari_enumFilter<$PrismaModel> | $Enums.hari_enum
  }

  export type NestedEnumhari_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hari_enum | Enumhari_enumFieldRefInput<$PrismaModel>
    in?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.hari_enum[] | ListEnumhari_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumhari_enumWithAggregatesFilter<$PrismaModel> | $Enums.hari_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhari_enumFilter<$PrismaModel>
    _max?: NestedEnumhari_enumFilter<$PrismaModel>
  }

  export type slotCreateWithoutBookingsInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesCreateNestedOneWithoutSlotInput
  }

  export type slotUncheckedCreateWithoutBookingsInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_prak?: string | null
  }

  export type slotCreateOrConnectWithoutBookingsInput = {
    where: slotWhereUniqueInput
    create: XOR<slotCreateWithoutBookingsInput, slotUncheckedCreateWithoutBookingsInput>
  }

  export type usersCreateWithoutBookingsInput = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs?: string | null
    nik?: string | null
    gender: $Enums.gender_enum
    tgl_lahir?: Date | string | null
    foto?: Uint8Array | null
    role?: string | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    id_user: string
    email: string
    nama: string
    sandi: string
    id_bpjs?: string | null
    nik?: string | null
    gender: $Enums.gender_enum
    tgl_lahir?: Date | string | null
    foto?: Uint8Array | null
    role?: string | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type slotUpsertWithoutBookingsInput = {
    update: XOR<slotUpdateWithoutBookingsInput, slotUncheckedUpdateWithoutBookingsInput>
    create: XOR<slotCreateWithoutBookingsInput, slotUncheckedCreateWithoutBookingsInput>
    where?: slotWhereInput
  }

  export type slotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: slotWhereInput
    data: XOR<slotUpdateWithoutBookingsInput, slotUncheckedUpdateWithoutBookingsInput>
  }

  export type slotUpdateWithoutBookingsInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUpdateOneWithoutSlotNestedInput
  }

  export type slotUncheckedUpdateWithoutBookingsInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prak?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    id_bpjs?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type specialistsCreateWithoutDetail_spInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsUncheckedCreateWithoutDetail_spInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesUncheckedCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsCreateOrConnectWithoutDetail_spInput = {
    where: specialistsWhereUniqueInput
    create: XOR<specialistsCreateWithoutDetail_spInput, specialistsUncheckedCreateWithoutDetail_spInput>
  }

  export type doctorsCreateWithoutDetail_spInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateWithoutDetail_spInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    practices?: practicesUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsCreateOrConnectWithoutDetail_spInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutDetail_spInput, doctorsUncheckedCreateWithoutDetail_spInput>
  }

  export type specialistsUpsertWithoutDetail_spInput = {
    update: XOR<specialistsUpdateWithoutDetail_spInput, specialistsUncheckedUpdateWithoutDetail_spInput>
    create: XOR<specialistsCreateWithoutDetail_spInput, specialistsUncheckedCreateWithoutDetail_spInput>
    where?: specialistsWhereInput
  }

  export type specialistsUpdateToOneWithWhereWithoutDetail_spInput = {
    where?: specialistsWhereInput
    data: XOR<specialistsUpdateWithoutDetail_spInput, specialistsUncheckedUpdateWithoutDetail_spInput>
  }

  export type specialistsUpdateWithoutDetail_spInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUpdateManyWithoutSpecialistsNestedInput
  }

  export type specialistsUncheckedUpdateWithoutDetail_spInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUncheckedUpdateManyWithoutSpecialistsNestedInput
  }

  export type doctorsUpsertWithoutDetail_spInput = {
    update: XOR<doctorsUpdateWithoutDetail_spInput, doctorsUncheckedUpdateWithoutDetail_spInput>
    create: XOR<doctorsCreateWithoutDetail_spInput, doctorsUncheckedCreateWithoutDetail_spInput>
    where?: doctorsWhereInput
  }

  export type doctorsUpdateToOneWithWhereWithoutDetail_spInput = {
    where?: doctorsWhereInput
    data: XOR<doctorsUpdateWithoutDetail_spInput, doctorsUncheckedUpdateWithoutDetail_spInput>
  }

  export type doctorsUpdateWithoutDetail_spInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateWithoutDetail_spInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practices?: practicesUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type detail_spCreateWithoutDoctorsInput = {
    specialists: specialistsCreateNestedOneWithoutDetail_spInput
  }

  export type detail_spUncheckedCreateWithoutDoctorsInput = {
    id_sp: string
  }

  export type detail_spCreateOrConnectWithoutDoctorsInput = {
    where: detail_spWhereUniqueInput
    create: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput>
  }

  export type detail_spCreateManyDoctorsInputEnvelope = {
    data: detail_spCreateManyDoctorsInput | detail_spCreateManyDoctorsInput[]
    skipDuplicates?: boolean
  }

  export type practicesCreateWithoutDoctorsInput = {
    id_prak: string
    hospitals: hospitalsCreateNestedOneWithoutPracticesInput
    schedules: schedulesCreateNestedOneWithoutPracticesInput
    specialists: specialistsCreateNestedOneWithoutPracticesInput
    slot?: slotCreateNestedManyWithoutPracticesInput
  }

  export type practicesUncheckedCreateWithoutDoctorsInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    id_sched: string
    slot?: slotUncheckedCreateNestedManyWithoutPracticesInput
  }

  export type practicesCreateOrConnectWithoutDoctorsInput = {
    where: practicesWhereUniqueInput
    create: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput>
  }

  export type practicesCreateManyDoctorsInputEnvelope = {
    data: practicesCreateManyDoctorsInput | practicesCreateManyDoctorsInput[]
    skipDuplicates?: boolean
  }

  export type detail_spUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: detail_spWhereUniqueInput
    update: XOR<detail_spUpdateWithoutDoctorsInput, detail_spUncheckedUpdateWithoutDoctorsInput>
    create: XOR<detail_spCreateWithoutDoctorsInput, detail_spUncheckedCreateWithoutDoctorsInput>
  }

  export type detail_spUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: detail_spWhereUniqueInput
    data: XOR<detail_spUpdateWithoutDoctorsInput, detail_spUncheckedUpdateWithoutDoctorsInput>
  }

  export type detail_spUpdateManyWithWhereWithoutDoctorsInput = {
    where: detail_spScalarWhereInput
    data: XOR<detail_spUpdateManyMutationInput, detail_spUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type detail_spScalarWhereInput = {
    AND?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
    OR?: detail_spScalarWhereInput[]
    NOT?: detail_spScalarWhereInput | detail_spScalarWhereInput[]
    lisensi?: StringFilter<"detail_sp"> | string
    id_sp?: StringFilter<"detail_sp"> | string
  }

  export type practicesUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: practicesWhereUniqueInput
    update: XOR<practicesUpdateWithoutDoctorsInput, practicesUncheckedUpdateWithoutDoctorsInput>
    create: XOR<practicesCreateWithoutDoctorsInput, practicesUncheckedCreateWithoutDoctorsInput>
  }

  export type practicesUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: practicesWhereUniqueInput
    data: XOR<practicesUpdateWithoutDoctorsInput, practicesUncheckedUpdateWithoutDoctorsInput>
  }

  export type practicesUpdateManyWithWhereWithoutDoctorsInput = {
    where: practicesScalarWhereInput
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type practicesScalarWhereInput = {
    AND?: practicesScalarWhereInput | practicesScalarWhereInput[]
    OR?: practicesScalarWhereInput[]
    NOT?: practicesScalarWhereInput | practicesScalarWhereInput[]
    id_prak?: StringFilter<"practices"> | string
    id_rs?: StringFilter<"practices"> | string
    id_sp?: StringFilter<"practices"> | string
    lisensi?: StringFilter<"practices"> | string
    id_sched?: StringFilter<"practices"> | string
  }

  export type citiesCreateWithoutHospitalsInput = {
    nama_kota: string
    provinces: provincesCreateNestedOneWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutHospitalsInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
  }

  export type citiesCreateOrConnectWithoutHospitalsInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutHospitalsInput, citiesUncheckedCreateWithoutHospitalsInput>
  }

  export type provincesCreateWithoutHospitalsInput = {
    nama_prov: string
    cities?: citiesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutHospitalsInput = {
    id_prov?: number
    nama_prov: string
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutHospitalsInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutHospitalsInput, provincesUncheckedCreateWithoutHospitalsInput>
  }

  export type practicesCreateWithoutHospitalsInput = {
    id_prak: string
    schedules: schedulesCreateNestedOneWithoutPracticesInput
    specialists: specialistsCreateNestedOneWithoutPracticesInput
    doctors: doctorsCreateNestedOneWithoutPracticesInput
    slot?: slotCreateNestedManyWithoutPracticesInput
  }

  export type practicesUncheckedCreateWithoutHospitalsInput = {
    id_prak: string
    id_sp: string
    lisensi: string
    id_sched: string
    slot?: slotUncheckedCreateNestedManyWithoutPracticesInput
  }

  export type practicesCreateOrConnectWithoutHospitalsInput = {
    where: practicesWhereUniqueInput
    create: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput>
  }

  export type practicesCreateManyHospitalsInputEnvelope = {
    data: practicesCreateManyHospitalsInput | practicesCreateManyHospitalsInput[]
    skipDuplicates?: boolean
  }

  export type citiesUpsertWithoutHospitalsInput = {
    update: XOR<citiesUpdateWithoutHospitalsInput, citiesUncheckedUpdateWithoutHospitalsInput>
    create: XOR<citiesCreateWithoutHospitalsInput, citiesUncheckedCreateWithoutHospitalsInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutHospitalsInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutHospitalsInput, citiesUncheckedUpdateWithoutHospitalsInput>
  }

  export type citiesUpdateWithoutHospitalsInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutHospitalsInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
  }

  export type provincesUpsertWithoutHospitalsInput = {
    update: XOR<provincesUpdateWithoutHospitalsInput, provincesUncheckedUpdateWithoutHospitalsInput>
    create: XOR<provincesCreateWithoutHospitalsInput, provincesUncheckedCreateWithoutHospitalsInput>
    where?: provincesWhereInput
  }

  export type provincesUpdateToOneWithWhereWithoutHospitalsInput = {
    where?: provincesWhereInput
    data: XOR<provincesUpdateWithoutHospitalsInput, provincesUncheckedUpdateWithoutHospitalsInput>
  }

  export type provincesUpdateWithoutHospitalsInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    cities?: citiesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutHospitalsInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    cities?: citiesUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type practicesUpsertWithWhereUniqueWithoutHospitalsInput = {
    where: practicesWhereUniqueInput
    update: XOR<practicesUpdateWithoutHospitalsInput, practicesUncheckedUpdateWithoutHospitalsInput>
    create: XOR<practicesCreateWithoutHospitalsInput, practicesUncheckedCreateWithoutHospitalsInput>
  }

  export type practicesUpdateWithWhereUniqueWithoutHospitalsInput = {
    where: practicesWhereUniqueInput
    data: XOR<practicesUpdateWithoutHospitalsInput, practicesUncheckedUpdateWithoutHospitalsInput>
  }

  export type practicesUpdateManyWithWhereWithoutHospitalsInput = {
    where: practicesScalarWhereInput
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyWithoutHospitalsInput>
  }

  export type hospitalsCreateWithoutPracticesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutHospitalsInput
    provinces?: provincesCreateNestedOneWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutPracticesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_kota?: number | null
    id_prov?: number | null
  }

  export type hospitalsCreateOrConnectWithoutPracticesInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutPracticesInput, hospitalsUncheckedCreateWithoutPracticesInput>
  }

  export type schedulesCreateWithoutPracticesInput = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type schedulesUncheckedCreateWithoutPracticesInput = {
    id_sched: string
    hari: $Enums.hari_enum
    start_session: string
    end_session: string
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type schedulesCreateOrConnectWithoutPracticesInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutPracticesInput, schedulesUncheckedCreateWithoutPracticesInput>
  }

  export type specialistsCreateWithoutPracticesInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsUncheckedCreateWithoutPracticesInput = {
    id_sp: string
    spesialis: string
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spUncheckedCreateNestedManyWithoutSpecialistsInput
  }

  export type specialistsCreateOrConnectWithoutPracticesInput = {
    where: specialistsWhereUniqueInput
    create: XOR<specialistsCreateWithoutPracticesInput, specialistsUncheckedCreateWithoutPracticesInput>
  }

  export type doctorsCreateWithoutPracticesInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsUncheckedCreateWithoutPracticesInput = {
    lisensi: string
    nama_dokter: string
    email: string
    sandi_dokter: string
    gender: $Enums.gender_enum
    tgl_lahir: Date | string
    status: $Enums.status_doctor
    foto?: Uint8Array | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    detail_sp?: detail_spUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type doctorsCreateOrConnectWithoutPracticesInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutPracticesInput, doctorsUncheckedCreateWithoutPracticesInput>
  }

  export type slotCreateWithoutPracticesInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutSlotInput
  }

  export type slotUncheckedCreateWithoutPracticesInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSlotInput
  }

  export type slotCreateOrConnectWithoutPracticesInput = {
    where: slotWhereUniqueInput
    create: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput>
  }

  export type slotCreateManyPracticesInputEnvelope = {
    data: slotCreateManyPracticesInput | slotCreateManyPracticesInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsUpsertWithoutPracticesInput = {
    update: XOR<hospitalsUpdateWithoutPracticesInput, hospitalsUncheckedUpdateWithoutPracticesInput>
    create: XOR<hospitalsCreateWithoutPracticesInput, hospitalsUncheckedCreateWithoutPracticesInput>
    where?: hospitalsWhereInput
  }

  export type hospitalsUpdateToOneWithWhereWithoutPracticesInput = {
    where?: hospitalsWhereInput
    data: XOR<hospitalsUpdateWithoutPracticesInput, hospitalsUncheckedUpdateWithoutPracticesInput>
  }

  export type hospitalsUpdateWithoutPracticesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutHospitalsNestedInput
    provinces?: provincesUpdateOneWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutPracticesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type schedulesUpsertWithoutPracticesInput = {
    update: XOR<schedulesUpdateWithoutPracticesInput, schedulesUncheckedUpdateWithoutPracticesInput>
    create: XOR<schedulesCreateWithoutPracticesInput, schedulesUncheckedCreateWithoutPracticesInput>
    where?: schedulesWhereInput
  }

  export type schedulesUpdateToOneWithWhereWithoutPracticesInput = {
    where?: schedulesWhereInput
    data: XOR<schedulesUpdateWithoutPracticesInput, schedulesUncheckedUpdateWithoutPracticesInput>
  }

  export type schedulesUpdateWithoutPracticesInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schedulesUncheckedUpdateWithoutPracticesInput = {
    id_sched?: StringFieldUpdateOperationsInput | string
    hari?: Enumhari_enumFieldUpdateOperationsInput | $Enums.hari_enum
    start_session?: StringFieldUpdateOperationsInput | string
    end_session?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type specialistsUpsertWithoutPracticesInput = {
    update: XOR<specialistsUpdateWithoutPracticesInput, specialistsUncheckedUpdateWithoutPracticesInput>
    create: XOR<specialistsCreateWithoutPracticesInput, specialistsUncheckedCreateWithoutPracticesInput>
    where?: specialistsWhereInput
  }

  export type specialistsUpdateToOneWithWhereWithoutPracticesInput = {
    where?: specialistsWhereInput
    data: XOR<specialistsUpdateWithoutPracticesInput, specialistsUncheckedUpdateWithoutPracticesInput>
  }

  export type specialistsUpdateWithoutPracticesInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUpdateManyWithoutSpecialistsNestedInput
  }

  export type specialistsUncheckedUpdateWithoutPracticesInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
    spesialis?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUncheckedUpdateManyWithoutSpecialistsNestedInput
  }

  export type doctorsUpsertWithoutPracticesInput = {
    update: XOR<doctorsUpdateWithoutPracticesInput, doctorsUncheckedUpdateWithoutPracticesInput>
    create: XOR<doctorsCreateWithoutPracticesInput, doctorsUncheckedCreateWithoutPracticesInput>
    where?: doctorsWhereInput
  }

  export type doctorsUpdateToOneWithWhereWithoutPracticesInput = {
    where?: doctorsWhereInput
    data: XOR<doctorsUpdateWithoutPracticesInput, doctorsUncheckedUpdateWithoutPracticesInput>
  }

  export type doctorsUpdateWithoutPracticesInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUpdateManyWithoutDoctorsNestedInput
  }

  export type doctorsUncheckedUpdateWithoutPracticesInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
    nama_dokter?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi_dokter?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumstatus_doctorFieldUpdateOperationsInput | $Enums.status_doctor
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail_sp?: detail_spUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type slotUpsertWithWhereUniqueWithoutPracticesInput = {
    where: slotWhereUniqueInput
    update: XOR<slotUpdateWithoutPracticesInput, slotUncheckedUpdateWithoutPracticesInput>
    create: XOR<slotCreateWithoutPracticesInput, slotUncheckedCreateWithoutPracticesInput>
  }

  export type slotUpdateWithWhereUniqueWithoutPracticesInput = {
    where: slotWhereUniqueInput
    data: XOR<slotUpdateWithoutPracticesInput, slotUncheckedUpdateWithoutPracticesInput>
  }

  export type slotUpdateManyWithWhereWithoutPracticesInput = {
    where: slotScalarWhereInput
    data: XOR<slotUpdateManyMutationInput, slotUncheckedUpdateManyWithoutPracticesInput>
  }

  export type slotScalarWhereInput = {
    AND?: slotScalarWhereInput | slotScalarWhereInput[]
    OR?: slotScalarWhereInput[]
    NOT?: slotScalarWhereInput | slotScalarWhereInput[]
    id_slot?: StringFilter<"slot"> | string
    tanggal?: DateTimeNullableFilter<"slot"> | Date | string | null
    total?: IntNullableFilter<"slot"> | number | null
    sisa?: IntNullableFilter<"slot"> | number | null
    create_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    update_at?: DateTimeNullableFilter<"slot"> | Date | string | null
    id_prak?: StringNullableFilter<"slot"> | string | null
  }

  export type practicesCreateWithoutSchedulesInput = {
    id_prak: string
    hospitals: hospitalsCreateNestedOneWithoutPracticesInput
    specialists: specialistsCreateNestedOneWithoutPracticesInput
    doctors: doctorsCreateNestedOneWithoutPracticesInput
    slot?: slotCreateNestedManyWithoutPracticesInput
  }

  export type practicesUncheckedCreateWithoutSchedulesInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
    slot?: slotUncheckedCreateNestedManyWithoutPracticesInput
  }

  export type practicesCreateOrConnectWithoutSchedulesInput = {
    where: practicesWhereUniqueInput
    create: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput>
  }

  export type practicesCreateManySchedulesInputEnvelope = {
    data: practicesCreateManySchedulesInput | practicesCreateManySchedulesInput[]
    skipDuplicates?: boolean
  }

  export type practicesUpsertWithWhereUniqueWithoutSchedulesInput = {
    where: practicesWhereUniqueInput
    update: XOR<practicesUpdateWithoutSchedulesInput, practicesUncheckedUpdateWithoutSchedulesInput>
    create: XOR<practicesCreateWithoutSchedulesInput, practicesUncheckedCreateWithoutSchedulesInput>
  }

  export type practicesUpdateWithWhereUniqueWithoutSchedulesInput = {
    where: practicesWhereUniqueInput
    data: XOR<practicesUpdateWithoutSchedulesInput, practicesUncheckedUpdateWithoutSchedulesInput>
  }

  export type practicesUpdateManyWithWhereWithoutSchedulesInput = {
    where: practicesScalarWhereInput
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type bookingsCreateWithoutSlotInput = {
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    users: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutSlotInput = {
    id_user: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsCreateOrConnectWithoutSlotInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput>
  }

  export type bookingsCreateManySlotInputEnvelope = {
    data: bookingsCreateManySlotInput | bookingsCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type practicesCreateWithoutSlotInput = {
    id_prak: string
    hospitals: hospitalsCreateNestedOneWithoutPracticesInput
    schedules: schedulesCreateNestedOneWithoutPracticesInput
    specialists: specialistsCreateNestedOneWithoutPracticesInput
    doctors: doctorsCreateNestedOneWithoutPracticesInput
  }

  export type practicesUncheckedCreateWithoutSlotInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
    id_sched: string
  }

  export type practicesCreateOrConnectWithoutSlotInput = {
    where: practicesWhereUniqueInput
    create: XOR<practicesCreateWithoutSlotInput, practicesUncheckedCreateWithoutSlotInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutSlotInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutSlotInput, bookingsUncheckedUpdateWithoutSlotInput>
    create: XOR<bookingsCreateWithoutSlotInput, bookingsUncheckedCreateWithoutSlotInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutSlotInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutSlotInput, bookingsUncheckedUpdateWithoutSlotInput>
  }

  export type bookingsUpdateManyWithWhereWithoutSlotInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutSlotInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id_user?: StringFilter<"bookings"> | string
    id_slot?: StringFilter<"bookings"> | string
    no_antrian?: IntFilter<"bookings"> | number
    status?: StringFilter<"bookings"> | string
    start_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    end_consul?: DateTimeNullableFilter<"bookings"> | Date | string | null
    gejala?: StringNullableFilter<"bookings"> | string | null
    durasi?: IntNullableFilter<"bookings"> | number | null
    create_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    update_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
  }

  export type practicesUpsertWithoutSlotInput = {
    update: XOR<practicesUpdateWithoutSlotInput, practicesUncheckedUpdateWithoutSlotInput>
    create: XOR<practicesCreateWithoutSlotInput, practicesUncheckedCreateWithoutSlotInput>
    where?: practicesWhereInput
  }

  export type practicesUpdateToOneWithWhereWithoutSlotInput = {
    where?: practicesWhereInput
    data: XOR<practicesUpdateWithoutSlotInput, practicesUncheckedUpdateWithoutSlotInput>
  }

  export type practicesUpdateWithoutSlotInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateOneRequiredWithoutPracticesNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutPracticesNestedInput
    specialists?: specialistsUpdateOneRequiredWithoutPracticesNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateWithoutSlotInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
  }

  export type detail_spCreateWithoutSpecialistsInput = {
    doctors: doctorsCreateNestedOneWithoutDetail_spInput
  }

  export type detail_spUncheckedCreateWithoutSpecialistsInput = {
    lisensi: string
  }

  export type detail_spCreateOrConnectWithoutSpecialistsInput = {
    where: detail_spWhereUniqueInput
    create: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput>
  }

  export type detail_spCreateManySpecialistsInputEnvelope = {
    data: detail_spCreateManySpecialistsInput | detail_spCreateManySpecialistsInput[]
    skipDuplicates?: boolean
  }

  export type practicesCreateWithoutSpecialistsInput = {
    id_prak: string
    hospitals: hospitalsCreateNestedOneWithoutPracticesInput
    schedules: schedulesCreateNestedOneWithoutPracticesInput
    doctors: doctorsCreateNestedOneWithoutPracticesInput
    slot?: slotCreateNestedManyWithoutPracticesInput
  }

  export type practicesUncheckedCreateWithoutSpecialistsInput = {
    id_prak: string
    id_rs: string
    lisensi: string
    id_sched: string
    slot?: slotUncheckedCreateNestedManyWithoutPracticesInput
  }

  export type practicesCreateOrConnectWithoutSpecialistsInput = {
    where: practicesWhereUniqueInput
    create: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput>
  }

  export type practicesCreateManySpecialistsInputEnvelope = {
    data: practicesCreateManySpecialistsInput | practicesCreateManySpecialistsInput[]
    skipDuplicates?: boolean
  }

  export type detail_spUpsertWithWhereUniqueWithoutSpecialistsInput = {
    where: detail_spWhereUniqueInput
    update: XOR<detail_spUpdateWithoutSpecialistsInput, detail_spUncheckedUpdateWithoutSpecialistsInput>
    create: XOR<detail_spCreateWithoutSpecialistsInput, detail_spUncheckedCreateWithoutSpecialistsInput>
  }

  export type detail_spUpdateWithWhereUniqueWithoutSpecialistsInput = {
    where: detail_spWhereUniqueInput
    data: XOR<detail_spUpdateWithoutSpecialistsInput, detail_spUncheckedUpdateWithoutSpecialistsInput>
  }

  export type detail_spUpdateManyWithWhereWithoutSpecialistsInput = {
    where: detail_spScalarWhereInput
    data: XOR<detail_spUpdateManyMutationInput, detail_spUncheckedUpdateManyWithoutSpecialistsInput>
  }

  export type practicesUpsertWithWhereUniqueWithoutSpecialistsInput = {
    where: practicesWhereUniqueInput
    update: XOR<practicesUpdateWithoutSpecialistsInput, practicesUncheckedUpdateWithoutSpecialistsInput>
    create: XOR<practicesCreateWithoutSpecialistsInput, practicesUncheckedCreateWithoutSpecialistsInput>
  }

  export type practicesUpdateWithWhereUniqueWithoutSpecialistsInput = {
    where: practicesWhereUniqueInput
    data: XOR<practicesUpdateWithoutSpecialistsInput, practicesUncheckedUpdateWithoutSpecialistsInput>
  }

  export type practicesUpdateManyWithWhereWithoutSpecialistsInput = {
    where: practicesScalarWhereInput
    data: XOR<practicesUpdateManyMutationInput, practicesUncheckedUpdateManyWithoutSpecialistsInput>
  }

  export type bookingsCreateWithoutUsersInput = {
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
    slot: slotCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsersInput = {
    id_slot: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsCreateOrConnectWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsCreateManyUsersInputEnvelope = {
    data: bookingsCreateManyUsersInput | bookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type provincesCreateWithoutCitiesInput = {
    nama_prov: string
    hospitals?: hospitalsCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutCitiesInput = {
    id_prov?: number
    nama_prov: string
    hospitals?: hospitalsUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutCitiesInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
  }

  export type hospitalsCreateWithoutCitiesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    provinces?: provincesCreateNestedOneWithoutHospitalsInput
    practices?: practicesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutCitiesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_prov?: number | null
    practices?: practicesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutCitiesInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput>
  }

  export type hospitalsCreateManyCitiesInputEnvelope = {
    data: hospitalsCreateManyCitiesInput | hospitalsCreateManyCitiesInput[]
    skipDuplicates?: boolean
  }

  export type provincesUpsertWithoutCitiesInput = {
    update: XOR<provincesUpdateWithoutCitiesInput, provincesUncheckedUpdateWithoutCitiesInput>
    create: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    where?: provincesWhereInput
  }

  export type provincesUpdateToOneWithWhereWithoutCitiesInput = {
    where?: provincesWhereInput
    data: XOR<provincesUpdateWithoutCitiesInput, provincesUncheckedUpdateWithoutCitiesInput>
  }

  export type provincesUpdateWithoutCitiesInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutCitiesInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type hospitalsUpsertWithWhereUniqueWithoutCitiesInput = {
    where: hospitalsWhereUniqueInput
    update: XOR<hospitalsUpdateWithoutCitiesInput, hospitalsUncheckedUpdateWithoutCitiesInput>
    create: XOR<hospitalsCreateWithoutCitiesInput, hospitalsUncheckedCreateWithoutCitiesInput>
  }

  export type hospitalsUpdateWithWhereUniqueWithoutCitiesInput = {
    where: hospitalsWhereUniqueInput
    data: XOR<hospitalsUpdateWithoutCitiesInput, hospitalsUncheckedUpdateWithoutCitiesInput>
  }

  export type hospitalsUpdateManyWithWhereWithoutCitiesInput = {
    where: hospitalsScalarWhereInput
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyWithoutCitiesInput>
  }

  export type hospitalsScalarWhereInput = {
    AND?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
    OR?: hospitalsScalarWhereInput[]
    NOT?: hospitalsScalarWhereInput | hospitalsScalarWhereInput[]
    id_rs?: StringFilter<"hospitals"> | string
    sandi_admin?: StringFilter<"hospitals"> | string
    nama_rs?: StringFilter<"hospitals"> | string
    tipe?: Enumtipe_enumFilter<"hospitals"> | $Enums.tipe_enum
    status?: Enumstatus_rsFilter<"hospitals"> | $Enums.status_rs
    deskripsi?: StringNullableFilter<"hospitals"> | string | null
    foto?: BytesNullableFilter<"hospitals"> | Uint8Array | null
    alamat?: StringFilter<"hospitals"> | string
    kode_pos?: StringFilter<"hospitals"> | string
    latitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"hospitals"> | Decimal | DecimalJsLike | number | string
    create_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    update_at?: DateTimeNullableFilter<"hospitals"> | Date | string | null
    id_kota?: IntNullableFilter<"hospitals"> | number | null
    id_prov?: IntNullableFilter<"hospitals"> | number | null
  }

  export type citiesCreateWithoutProvincesInput = {
    nama_kota: string
    hospitals?: hospitalsCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutProvincesInput = {
    id_kota?: number
    nama_kota: string
    hospitals?: hospitalsUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesCreateOrConnectWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput>
  }

  export type citiesCreateManyProvincesInputEnvelope = {
    data: citiesCreateManyProvincesInput | citiesCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type hospitalsCreateWithoutProvincesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutHospitalsInput
    practices?: practicesCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsUncheckedCreateWithoutProvincesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_kota?: number | null
    practices?: practicesUncheckedCreateNestedManyWithoutHospitalsInput
  }

  export type hospitalsCreateOrConnectWithoutProvincesInput = {
    where: hospitalsWhereUniqueInput
    create: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput>
  }

  export type hospitalsCreateManyProvincesInputEnvelope = {
    data: hospitalsCreateManyProvincesInput | hospitalsCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type citiesUpsertWithWhereUniqueWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    update: XOR<citiesUpdateWithoutProvincesInput, citiesUncheckedUpdateWithoutProvincesInput>
    create: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput>
  }

  export type citiesUpdateWithWhereUniqueWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    data: XOR<citiesUpdateWithoutProvincesInput, citiesUncheckedUpdateWithoutProvincesInput>
  }

  export type citiesUpdateManyWithWhereWithoutProvincesInput = {
    where: citiesScalarWhereInput
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyWithoutProvincesInput>
  }

  export type citiesScalarWhereInput = {
    AND?: citiesScalarWhereInput | citiesScalarWhereInput[]
    OR?: citiesScalarWhereInput[]
    NOT?: citiesScalarWhereInput | citiesScalarWhereInput[]
    id_kota?: IntFilter<"cities"> | number
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
  }

  export type hospitalsUpsertWithWhereUniqueWithoutProvincesInput = {
    where: hospitalsWhereUniqueInput
    update: XOR<hospitalsUpdateWithoutProvincesInput, hospitalsUncheckedUpdateWithoutProvincesInput>
    create: XOR<hospitalsCreateWithoutProvincesInput, hospitalsUncheckedCreateWithoutProvincesInput>
  }

  export type hospitalsUpdateWithWhereUniqueWithoutProvincesInput = {
    where: hospitalsWhereUniqueInput
    data: XOR<hospitalsUpdateWithoutProvincesInput, hospitalsUncheckedUpdateWithoutProvincesInput>
  }

  export type hospitalsUpdateManyWithWhereWithoutProvincesInput = {
    where: hospitalsScalarWhereInput
    data: XOR<hospitalsUpdateManyMutationInput, hospitalsUncheckedUpdateManyWithoutProvincesInput>
  }

  export type detail_spCreateManyDoctorsInput = {
    id_sp: string
  }

  export type practicesCreateManyDoctorsInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    id_sched: string
  }

  export type detail_spUpdateWithoutDoctorsInput = {
    specialists?: specialistsUpdateOneRequiredWithoutDetail_spNestedInput
  }

  export type detail_spUncheckedUpdateWithoutDoctorsInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
  }

  export type detail_spUncheckedUpdateManyWithoutDoctorsInput = {
    id_sp?: StringFieldUpdateOperationsInput | string
  }

  export type practicesUpdateWithoutDoctorsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateOneRequiredWithoutPracticesNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutPracticesNestedInput
    specialists?: specialistsUpdateOneRequiredWithoutPracticesNestedInput
    slot?: slotUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateWithoutDoctorsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
    slot?: slotUncheckedUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateManyWithoutDoctorsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
  }

  export type practicesCreateManyHospitalsInput = {
    id_prak: string
    id_sp: string
    lisensi: string
    id_sched: string
  }

  export type practicesUpdateWithoutHospitalsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    schedules?: schedulesUpdateOneRequiredWithoutPracticesNestedInput
    specialists?: specialistsUpdateOneRequiredWithoutPracticesNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutPracticesNestedInput
    slot?: slotUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateWithoutHospitalsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
    slot?: slotUncheckedUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateManyWithoutHospitalsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
  }

  export type slotCreateManyPracticesInput = {
    id_slot: string
    tanggal?: Date | string | null
    total?: number | null
    sisa?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type slotUpdateWithoutPracticesInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutSlotNestedInput
  }

  export type slotUncheckedUpdateWithoutPracticesInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type slotUncheckedUpdateManyWithoutPracticesInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    tanggal?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    sisa?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type practicesCreateManySchedulesInput = {
    id_prak: string
    id_rs: string
    id_sp: string
    lisensi: string
  }

  export type practicesUpdateWithoutSchedulesInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateOneRequiredWithoutPracticesNestedInput
    specialists?: specialistsUpdateOneRequiredWithoutPracticesNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutPracticesNestedInput
    slot?: slotUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateWithoutSchedulesInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    slot?: slotUncheckedUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateManyWithoutSchedulesInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    id_sp?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
  }

  export type bookingsCreateManySlotInput = {
    id_user: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsUpdateWithoutSlotInput = {
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutSlotInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutSlotInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detail_spCreateManySpecialistsInput = {
    lisensi: string
  }

  export type practicesCreateManySpecialistsInput = {
    id_prak: string
    id_rs: string
    lisensi: string
    id_sched: string
  }

  export type detail_spUpdateWithoutSpecialistsInput = {
    doctors?: doctorsUpdateOneRequiredWithoutDetail_spNestedInput
  }

  export type detail_spUncheckedUpdateWithoutSpecialistsInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
  }

  export type detail_spUncheckedUpdateManyWithoutSpecialistsInput = {
    lisensi?: StringFieldUpdateOperationsInput | string
  }

  export type practicesUpdateWithoutSpecialistsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateOneRequiredWithoutPracticesNestedInput
    schedules?: schedulesUpdateOneRequiredWithoutPracticesNestedInput
    doctors?: doctorsUpdateOneRequiredWithoutPracticesNestedInput
    slot?: slotUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateWithoutSpecialistsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
    slot?: slotUncheckedUpdateManyWithoutPracticesNestedInput
  }

  export type practicesUncheckedUpdateManyWithoutSpecialistsInput = {
    id_prak?: StringFieldUpdateOperationsInput | string
    id_rs?: StringFieldUpdateOperationsInput | string
    lisensi?: StringFieldUpdateOperationsInput | string
    id_sched?: StringFieldUpdateOperationsInput | string
  }

  export type bookingsCreateManyUsersInput = {
    id_slot: string
    no_antrian: number
    status: string
    start_consul?: Date | string | null
    end_consul?: Date | string | null
    gejala?: string | null
    durasi?: number | null
    create_at?: Date | string | null
    update_at?: Date | string | null
  }

  export type bookingsUpdateWithoutUsersInput = {
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slot?: slotUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsersInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    id_slot?: StringFieldUpdateOperationsInput | string
    no_antrian?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    start_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_consul?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gejala?: NullableStringFieldUpdateOperationsInput | string | null
    durasi?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hospitalsCreateManyCitiesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_prov?: number | null
  }

  export type hospitalsUpdateWithoutCitiesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinces?: provincesUpdateOneWithoutHospitalsNestedInput
    practices?: practicesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutCitiesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    practices?: practicesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateManyWithoutCitiesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type citiesCreateManyProvincesInput = {
    id_kota?: number
    nama_kota: string
  }

  export type hospitalsCreateManyProvincesInput = {
    id_rs: string
    sandi_admin: string
    nama_rs: string
    tipe: $Enums.tipe_enum
    status: $Enums.status_rs
    deskripsi?: string | null
    foto?: Uint8Array | null
    alamat: string
    kode_pos: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    create_at?: Date | string | null
    update_at?: Date | string | null
    id_kota?: number | null
  }

  export type citiesUpdateWithoutProvincesInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    hospitals?: hospitalsUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateManyWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
  }

  export type hospitalsUpdateWithoutProvincesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutHospitalsNestedInput
    practices?: practicesUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateWithoutProvincesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    practices?: practicesUncheckedUpdateManyWithoutHospitalsNestedInput
  }

  export type hospitalsUncheckedUpdateManyWithoutProvincesInput = {
    id_rs?: StringFieldUpdateOperationsInput | string
    sandi_admin?: StringFieldUpdateOperationsInput | string
    nama_rs?: StringFieldUpdateOperationsInput | string
    tipe?: Enumtipe_enumFieldUpdateOperationsInput | $Enums.tipe_enum
    status?: Enumstatus_rsFieldUpdateOperationsInput | $Enums.status_rs
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}