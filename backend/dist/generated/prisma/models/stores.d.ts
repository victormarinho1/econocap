import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type storesModel = runtime.Types.Result.DefaultSelection<Prisma.$storesPayload>;
export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null;
    _min: StoresMinAggregateOutputType | null;
    _max: StoresMaxAggregateOutputType | null;
};
export type StoresMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    website: string | null;
    contact_email: string | null;
    created_at: Date | null;
};
export type StoresMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    website: string | null;
    contact_email: string | null;
    created_at: Date | null;
};
export type StoresCountAggregateOutputType = {
    id: number;
    name: number;
    website: number;
    contact_email: number;
    created_at: number;
    _all: number;
};
export type StoresMinAggregateInputType = {
    id?: true;
    name?: true;
    website?: true;
    contact_email?: true;
    created_at?: true;
};
export type StoresMaxAggregateInputType = {
    id?: true;
    name?: true;
    website?: true;
    contact_email?: true;
    created_at?: true;
};
export type StoresCountAggregateInputType = {
    id?: true;
    name?: true;
    website?: true;
    contact_email?: true;
    created_at?: true;
    _all?: true;
};
export type StoresAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    cursor?: Prisma.storesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StoresCountAggregateInputType;
    _min?: StoresMinAggregateInputType;
    _max?: StoresMaxAggregateInputType;
};
export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
    [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStores[P]> : Prisma.GetScalarType<T[P], AggregateStores[P]>;
};
export type storesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithAggregationInput | Prisma.storesOrderByWithAggregationInput[];
    by: Prisma.StoresScalarFieldEnum[] | Prisma.StoresScalarFieldEnum;
    having?: Prisma.storesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoresCountAggregateInputType | true;
    _min?: StoresMinAggregateInputType;
    _max?: StoresMaxAggregateInputType;
};
export type StoresGroupByOutputType = {
    id: string;
    name: string;
    website: string | null;
    contact_email: string | null;
    created_at: Date;
    _count: StoresCountAggregateOutputType | null;
    _min: StoresMinAggregateOutputType | null;
    _max: StoresMaxAggregateOutputType | null;
};
type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoresGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoresGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoresGroupByOutputType[P]>;
}>>;
export type storesWhereInput = {
    AND?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    OR?: Prisma.storesWhereInput[];
    NOT?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    id?: Prisma.UuidFilter<"stores"> | string;
    name?: Prisma.StringFilter<"stores"> | string;
    website?: Prisma.StringNullableFilter<"stores"> | string | null;
    contact_email?: Prisma.StringNullableFilter<"stores"> | string | null;
    created_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    promotions?: Prisma.PromotionsListRelationFilter;
};
export type storesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    contact_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    promotions?: Prisma.promotionsOrderByRelationAggregateInput;
};
export type storesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    OR?: Prisma.storesWhereInput[];
    NOT?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    name?: Prisma.StringFilter<"stores"> | string;
    website?: Prisma.StringNullableFilter<"stores"> | string | null;
    contact_email?: Prisma.StringNullableFilter<"stores"> | string | null;
    created_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    promotions?: Prisma.PromotionsListRelationFilter;
}, "id">;
export type storesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    contact_email?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.storesCountOrderByAggregateInput;
    _max?: Prisma.storesMaxOrderByAggregateInput;
    _min?: Prisma.storesMinOrderByAggregateInput;
};
export type storesScalarWhereWithAggregatesInput = {
    AND?: Prisma.storesScalarWhereWithAggregatesInput | Prisma.storesScalarWhereWithAggregatesInput[];
    OR?: Prisma.storesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.storesScalarWhereWithAggregatesInput | Prisma.storesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"stores"> | string;
    name?: Prisma.StringWithAggregatesFilter<"stores"> | string;
    website?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    contact_email?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"stores"> | Date | string;
};
export type storesCreateInput = {
    id?: string;
    name: string;
    website?: string | null;
    contact_email?: string | null;
    created_at?: Date | string;
    promotions?: Prisma.promotionsCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateInput = {
    id?: string;
    name: string;
    website?: string | null;
    contact_email?: string | null;
    created_at?: Date | string;
    promotions?: Prisma.promotionsUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotions?: Prisma.promotionsUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotions?: Prisma.promotionsUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateManyInput = {
    id?: string;
    name: string;
    website?: string | null;
    contact_email?: string | null;
    created_at?: Date | string;
};
export type storesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoresNullableScalarRelationFilter = {
    is?: Prisma.storesWhereInput | null;
    isNot?: Prisma.storesWhereInput | null;
};
export type storesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type storesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type storesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type storesCreateNestedOneWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutPromotionsInput, Prisma.storesUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutPromotionsInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutPromotionsInput, Prisma.storesUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutPromotionsInput;
    upsert?: Prisma.storesUpsertWithoutPromotionsInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutPromotionsInput, Prisma.storesUpdateWithoutPromotionsInput>, Prisma.storesUncheckedUpdateWithoutPromotionsInput>;
};
export type storesCreateWithoutPromotionsInput = {
    id?: string;
    name: string;
    website?: string | null;
    contact_email?: string | null;
    created_at?: Date | string;
};
export type storesUncheckedCreateWithoutPromotionsInput = {
    id?: string;
    name: string;
    website?: string | null;
    contact_email?: string | null;
    created_at?: Date | string;
};
export type storesCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutPromotionsInput, Prisma.storesUncheckedCreateWithoutPromotionsInput>;
};
export type storesUpsertWithoutPromotionsInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutPromotionsInput, Prisma.storesUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutPromotionsInput, Prisma.storesUncheckedCreateWithoutPromotionsInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutPromotionsInput, Prisma.storesUncheckedUpdateWithoutPromotionsInput>;
};
export type storesUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type storesUncheckedUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StoresCountOutputType = {
    promotions: number;
};
export type StoresCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | StoresCountOutputTypeCountPromotionsArgs;
};
export type StoresCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StoresCountOutputTypeSelect<ExtArgs> | null;
};
export type StoresCountOutputTypeCountPromotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotionsWhereInput;
};
export type storesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    website?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
    promotions?: boolean | Prisma.stores$promotionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StoresCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stores"]>;
export type storesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    website?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["stores"]>;
export type storesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    website?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["stores"]>;
export type storesSelectScalar = {
    id?: boolean;
    name?: boolean;
    website?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
};
export type storesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "website" | "contact_email" | "created_at", ExtArgs["result"]["stores"]>;
export type storesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.stores$promotionsArgs<ExtArgs>;
    _count?: boolean | Prisma.StoresCountOutputTypeDefaultArgs<ExtArgs>;
};
export type storesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type storesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $storesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stores";
    objects: {
        promotions: Prisma.$promotionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        website: string | null;
        contact_email: string | null;
        created_at: Date;
    }, ExtArgs["result"]["stores"]>;
    composites: {};
};
export type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$storesPayload, S>;
export type storesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoresCountAggregateInputType | true;
};
export interface storesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stores'];
        meta: {
            name: 'stores';
        };
    };
    findUnique<T extends storesFindUniqueArgs>(args: Prisma.SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends storesFindFirstArgs>(args?: Prisma.SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends storesFindManyArgs>(args?: Prisma.SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends storesCreateArgs>(args: Prisma.SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends storesCreateManyArgs>(args?: Prisma.SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends storesDeleteArgs>(args: Prisma.SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends storesUpdateArgs>(args: Prisma.SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends storesDeleteManyArgs>(args?: Prisma.SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends storesUpdateManyArgs>(args: Prisma.SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends storesUpsertArgs>(args: Prisma.SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends storesCountArgs>(args?: Prisma.Subset<T, storesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoresCountAggregateOutputType> : number>;
    aggregate<T extends StoresAggregateArgs>(args: Prisma.Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>;
    groupBy<T extends storesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: storesGroupByArgs['orderBy'];
    } : {
        orderBy?: storesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: storesFieldRefs;
}
export interface Prisma__storesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promotions<T extends Prisma.stores$promotionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface storesFieldRefs {
    readonly id: Prisma.FieldRef<"stores", 'String'>;
    readonly name: Prisma.FieldRef<"stores", 'String'>;
    readonly website: Prisma.FieldRef<"stores", 'String'>;
    readonly contact_email: Prisma.FieldRef<"stores", 'String'>;
    readonly created_at: Prisma.FieldRef<"stores", 'DateTime'>;
}
export type storesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where: Prisma.storesWhereUniqueInput;
};
export type storesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where: Prisma.storesWhereUniqueInput;
};
export type storesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    cursor?: Prisma.storesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
export type storesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    cursor?: Prisma.storesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
export type storesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    cursor?: Prisma.storesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
export type storesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storesCreateInput, Prisma.storesUncheckedCreateInput>;
};
export type storesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.storesCreateManyInput | Prisma.storesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type storesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    data: Prisma.storesCreateManyInput | Prisma.storesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type storesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storesUpdateInput, Prisma.storesUncheckedUpdateInput>;
    where: Prisma.storesWhereUniqueInput;
};
export type storesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.storesUpdateManyMutationInput, Prisma.storesUncheckedUpdateManyInput>;
    where?: Prisma.storesWhereInput;
    limit?: number;
};
export type storesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.storesUpdateManyMutationInput, Prisma.storesUncheckedUpdateManyInput>;
    where?: Prisma.storesWhereInput;
    limit?: number;
};
export type storesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateInput, Prisma.storesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.storesUpdateInput, Prisma.storesUncheckedUpdateInput>;
};
export type storesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
    where: Prisma.storesWhereUniqueInput;
};
export type storesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
    limit?: number;
};
export type stores$promotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    include?: Prisma.promotionsInclude<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithRelationInput | Prisma.promotionsOrderByWithRelationInput[];
    cursor?: Prisma.promotionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionsScalarFieldEnum | Prisma.PromotionsScalarFieldEnum[];
};
export type storesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.storesSelect<ExtArgs> | null;
    omit?: Prisma.storesOmit<ExtArgs> | null;
    include?: Prisma.storesInclude<ExtArgs> | null;
};
export {};
