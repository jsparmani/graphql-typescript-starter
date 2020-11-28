import {Query, Resolver} from "type-graphql";

@Resolver()
export class TestResolver {
    @Query(() => String)
    hi(): string {
        return "hi";
    }
}
