export const isFunctionType = <FunctionType>(fun: unknown): fun is FunctionType => typeof fun === 'function';

export const callWhenFunction = <FunctionType extends (...args: any[]) => any = (...args: any[]) => any>(
  action?: FunctionType,
  ...args: Parameters<FunctionType>
): ReturnType<FunctionType> | null => {
  if (typeof action !== 'function') {
    return null;
  }

  return action(...args);
};

type DefaultCallArguments = unknown[];
type EntryFunctionCall<Args extends DefaultCallArguments, ReturnValue> = (...args: Args) => ReturnValue;
type DefaultEntriesType = string | number | 'default';

const defaultSwitcher: EntryFunctionCall<unknown[], unknown> = (value: unknown) => value;

export const switchCase = <
  ReturnValue = any,
  EntriesType extends DefaultEntriesType = DefaultEntriesType,
  CallArguments extends DefaultCallArguments = DefaultCallArguments,
  FunctionCall extends EntryFunctionCall<CallArguments, ReturnValue> = EntryFunctionCall<CallArguments, ReturnValue>,
  CasesType extends Record<string, any> = Partial<Record<EntriesType | 'default', FunctionCall | ReturnValue>>,
  SwitcherType extends EntryFunctionCall<CallArguments, EntriesType | 'default'> = EntryFunctionCall<
    CallArguments,
    EntriesType | 'default'
  >
>(
  entries: CasesType,
  customSwitcher?: SwitcherType
) => {
  const switcher: SwitcherType = customSwitcher || ((defaultSwitcher as unknown) as SwitcherType); // @TODO Find out how to get rid of unknown.
  const cases: CasesType = Object.assign({ default: null }, entries);
  const defaultCase = cases.default;

  return (...args: CallArguments): ReturnValue => {
    let entry = cases[switcher(...args) as keyof CasesType];

    if (entry === undefined) {
      entry = defaultCase;
    }

    return isFunctionType<FunctionCall>(entry) ? entry(...args, entries) : entry;
  };
};
