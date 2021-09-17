const filterEmpty = (value: string | undefined) => value !== undefined && value !== '';

export const conditionClass = (condition: boolean, className: string, alternateClassName?: string) =>
  condition ? className : alternateClassName || '';

export const joinClasses = (...classNames: (string | undefined)[]) => classNames.filter(filterEmpty).join(' ');
