import "@/global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function _layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Shop", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="product/[id]"
            options={{ title: "Product", headerTitleAlign: "center" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
