'use client';

import * as React from 'react';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';

type InputOTPProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  maxLength: number;
  value: string;
  onChange: (value: string) => void;
}

interface InputOTPContextValue {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  disabled?: boolean;
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null);

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ className, maxLength, value, onChange, disabled, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.slice(0, maxLength);
      onChange(newValue);
    };

    return (
      <InputOTPContext.Provider
        value={{
          value,
          onChange,
          maxLength,
          disabled
        }}
      >
        <div ref={ref} className={cn('flex items-center gap-2', className)}>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={maxLength}
            value={value}
            onChange={handleInputChange}
            className="sr-only"
            disabled={disabled}
            {...props}
          />
          {props.children}
        </div>
      </InputOTPContext.Provider>
    );
  }
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center', className)}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error('InputOTPSlot must be used within InputOTP');
  }

  const { value, disabled } = context;
  const char = value[index] || '';
  const isFocused = value.length === index;
  
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isFocused && 'ring-2 ring-offset-background ring-ring',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {char}
      {isFocused && !disabled && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
