import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

interface FormLabel extends React.HTMLAttributes<HTMLLabelElement> {}

export function FormLabel({ children, ...props }: FormLabel) {
  return (
    <Label {...props} className={cn('text-sm font-medium', props.className)}>
      {children}
    </Label>
  );
}
