import { useAppStateStore } from "@/store";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function LogoSelector() {
  const { state, setState } = useAppStateStore();
  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setState("logo", reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setState("logo", "");
    }
  };

  return (
    <div className="grid gap-2">
      <Input type="file" id="logo" onChange={handleImageUpload} />
      {state.logo && (
        <img src={state.logo} alt="logo" className="w-20 h-20 object-contain" />
      )}
    </div>
  );
}