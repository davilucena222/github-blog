import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchInputContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsNumber?: number;
  getPosts: (query: string) => Promise<void>;
}

export function SearchInput({ postsNumber, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  function handleSearchPosts(data: SearchFormInput) {
    getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>

        <span>{postsNumber} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}