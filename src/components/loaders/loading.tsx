export const Loading = () => {
  return (
    <h5 className="text-primary text-lg font-semibold space-x-1">
      <span>Loading</span>
      <span className="animate-[pulse_1s_infinite_100ms]">.</span>
      <span className="animate-[pulse_1s_infinite_200ms]">.</span>
      <span className="animate-[pulse_1s_infinite_300ms]">.</span>
    </h5>
  );
};
