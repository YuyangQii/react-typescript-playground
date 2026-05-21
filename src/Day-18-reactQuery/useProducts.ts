import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "./productsApi";

// export const useProduct = (id: number) => {
//   return useQuery({
//     queryKey: ["product"],
//     queryFn: fetchProductById,
//   });
// };

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};