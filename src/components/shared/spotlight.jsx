import * as React from "react";
import {CodeIcon} from "@radix-ui/react-icons";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {Button} from "../ui/button";
import {cn} from "@/lib/utils";
import {Link} from "react-router-dom"; // Assuming you're using react-router

export function Spotlight({filteredVariants}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && e.metaKey) {
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="w-full">
            <Button
                variant="outline"
                className={cn(
                    "relative w-full justify-start text-sm text-muted-foreground sm:pr-12"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="hidden lg:inline-flex">Search variants...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd
                    className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..."/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Text Variants">
                        {filteredVariants.map((variant, index) => (
                            <CommandItem
                                key={index}
                                onSelect={() => {
                                    // If you're using React Router
                                    setOpen(false);
                                }}
                            >
                                <CodeIcon className="mr-2 h-4 w-4"/>
                                <Link
                                    to={`#${variant.name.toLowerCase().replace(" ", "-")}`}
                                    className="text-sm text-muted-foreground"
                                >
                                    {variant.name}
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
}
