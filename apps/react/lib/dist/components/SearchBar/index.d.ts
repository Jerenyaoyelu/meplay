import * as React from 'react';
interface CSearchBarProp {
    onChange?: (v?: string) => void;
    onSearch?: (v?: string) => void;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    placeholder?: string;
    value?: string;
    className?: string;
}
export declare const CrSearchBar: React.FC<CSearchBarProp>;
export {};
