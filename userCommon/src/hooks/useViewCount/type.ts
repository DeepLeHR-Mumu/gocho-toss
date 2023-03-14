export interface UseViewCountProps {
  id: number | undefined;
  target: "job" | "company" | "tip";
  viewMutation: () => void;
}
