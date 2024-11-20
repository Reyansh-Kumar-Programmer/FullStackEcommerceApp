import "@/global.css";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";

const queryClient = new QueryClient();

export default function _layout() {
  const cartItemNum = useCart((state) => state.items.length);
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              cartItemNum > 0 && <Link href="/cart" asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={ShoppingCart} size="xl" />
                  <Text>{cartItemNum}</Text>
                </Pressable>
              </Link>
            ),
          }}
        >
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
