import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

interface Props {
	children: React.ReactNode;
}

export const ReactQueryClientProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
