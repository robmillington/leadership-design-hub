import React, { createContext, useContext, useState } from "react";

interface CollapsibleContextValue {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CollapsibleContext = createContext<CollapsibleContextValue | undefined>(undefined);

interface CollapsibleProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function Collapsible({ children, open: controlledOpen, onOpenChange }: CollapsibleProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
    const handleOpenChange = onOpenChange || setUncontrolledOpen;

    return (
        <CollapsibleContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
            <div>{children}</div>
        </CollapsibleContext.Provider>
    );
}

interface CollapsibleTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function CollapsibleTrigger({ children, asChild }: CollapsibleTriggerProps) {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");

    const handleClick = () => context.onOpenChange(!context.open);

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: handleClick,
        });
    }

    return <button onClick={handleClick}>{children}</button>;
}

interface CollapsibleContentProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export function CollapsibleContent({ children, id, className }: CollapsibleContentProps) {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleContent must be used within Collapsible");

    if (!context.open) return null;

    return (
        <div id={id} className={className} data-state={context.open ? "open" : "closed"}>
            {children}
        </div>
    );
}
