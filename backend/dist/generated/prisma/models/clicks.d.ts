import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type clicksModel = runtime.Types.Result.DefaultSelection<Prisma.$clicksPayload>;
export type AggregateClicks = {
    _count: ClicksCountAggregateOutputType | null;
    _min: ClicksMinAggregateOutputType | null;
    _max: ClicksMaxAggregateOutputType | null;
};
export type ClicksMinAggregateOutputType = {
    id: string | null;
    promotions_id: string | null;
    ip: string | null;
    user_agent: string | null;
    referrer: string | null;
    landing_url: string | null;
    created_at: Date | null;
};
export type ClicksMaxAggregateOutputType = {
    id: string | null;
    promotions_id: string | null;
    ip: string | null;
    user_agent: string | null;
    referrer: string | null;
    landing_url: string | null;
    created_at: Date | null;
};
export type ClicksCountAggregateOutputType = {
    id: number;
    promotions_id: number;
    ip: number;
    user_agent: number;
    referrer: number;
    landing_url: number;
    created_at: number;
    _all: number;
};
export type ClicksMinAggregateInputType = {
    id?: true;
    promotions_id?: true;
    ip?: true;
    user_agent?: true;
    referrer?: true;
    landing_url?: true;
    created_at?: true;
};
export type ClicksMaxAggregateInputType = {
    id?: true;
    promotions_id?: true;
    ip?: true;
    user_agent?: true;
    referrer?: true;
    landing_url?: true;
    created_at?: true;
};
export type ClicksCountAggregateInputType = {
    id?: true;
    promotions_id?: true;
    ip?: true;
    user_agent?: true;
    referrer?: true;
    landing_url?: true;
    created_at?: true;
    _all?: true;
};
export type ClicksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clicksWhereInput;
    orderBy?: Prisma.clicksOrderByWithRelationInput | Prisma.clicksOrderByWithRelationInput[];
    cursor?: Prisma.clicksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClicksCountAggregateInputType;
    _min?: ClicksMinAggregateInputType;
    _max?: ClicksMaxAggregateInputType;
};
export type GetClicksAggregateType<T extends ClicksAggregateArgs> = {
    [P in keyof T & keyof AggregateClicks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClicks[P]> : Prisma.GetScalarType<T[P], AggregateClicks[P]>;
};
export type clicksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clicksWhereInput;
    orderBy?: Prisma.clicksOrderByWithAggregationInput | Prisma.clicksOrderByWithAggregationInput[];
    by: Prisma.ClicksScalarFieldEnum[] | Prisma.ClicksScalarFieldEnum;
    having?: Prisma.clicksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClicksCountAggregateInputType | true;
    _min?: ClicksMinAggregateInputType;
    _max?: ClicksMaxAggregateInputType;
};
export type ClicksGroupByOutputType = {
    id: string;
    promotions_id: string | null;
    ip: string | null;
    user_agent: string | null;
    referrer: string | null;
    landing_url: string | null;
    created_at: Date;
    _count: ClicksCountAggregateOutputType | null;
    _min: ClicksMinAggregateOutputType | null;
    _max: ClicksMaxAggregateOutputType | null;
};
type GetClicksGroupByPayload<T extends clicksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClicksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClicksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClicksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClicksGroupByOutputType[P]>;
}>>;
export type clicksWhereInput = {
    AND?: Prisma.clicksWhereInput | Prisma.clicksWhereInput[];
    OR?: Prisma.clicksWhereInput[];
    NOT?: Prisma.clicksWhereInput | Prisma.clicksWhereInput[];
    id?: Prisma.UuidFilter<"clicks"> | string;
    promotions_id?: Prisma.UuidNullableFilter<"clicks"> | string | null;
    ip?: Prisma.StringNullableFilter<"clicks"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"clicks"> | string | null;
    referrer?: Prisma.StringNullableFilter<"clicks"> | string | null;
    landing_url?: Prisma.StringNullableFilter<"clicks"> | string | null;
    created_at?: Prisma.DateTimeFilter<"clicks"> | Date | string;
    promotions?: Prisma.XOR<Prisma.PromotionsNullableScalarRelationFilter, Prisma.promotionsWhereInput> | null;
};
export type clicksOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    promotions_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    landing_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    promotions?: Prisma.promotionsOrderByWithRelationInput;
};
export type clicksWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.clicksWhereInput | Prisma.clicksWhereInput[];
    OR?: Prisma.clicksWhereInput[];
    NOT?: Prisma.clicksWhereInput | Prisma.clicksWhereInput[];
    promotions_id?: Prisma.UuidNullableFilter<"clicks"> | string | null;
    ip?: Prisma.StringNullableFilter<"clicks"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"clicks"> | string | null;
    referrer?: Prisma.StringNullableFilter<"clicks"> | string | null;
    landing_url?: Prisma.StringNullableFilter<"clicks"> | string | null;
    created_at?: Prisma.DateTimeFilter<"clicks"> | Date | string;
    promotions?: Prisma.XOR<Prisma.PromotionsNullableScalarRelationFilter, Prisma.promotionsWhereInput> | null;
}, "id">;
export type clicksOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    promotions_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    landing_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.clicksCountOrderByAggregateInput;
    _max?: Prisma.clicksMaxOrderByAggregateInput;
    _min?: Prisma.clicksMinOrderByAggregateInput;
};
export type clicksScalarWhereWithAggregatesInput = {
    AND?: Prisma.clicksScalarWhereWithAggregatesInput | Prisma.clicksScalarWhereWithAggregatesInput[];
    OR?: Prisma.clicksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.clicksScalarWhereWithAggregatesInput | Prisma.clicksScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"clicks"> | string;
    promotions_id?: Prisma.UuidNullableWithAggregatesFilter<"clicks"> | string | null;
    ip?: Prisma.StringNullableWithAggregatesFilter<"clicks"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"clicks"> | string | null;
    referrer?: Prisma.StringNullableWithAggregatesFilter<"clicks"> | string | null;
    landing_url?: Prisma.StringNullableWithAggregatesFilter<"clicks"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"clicks"> | Date | string;
};
export type clicksCreateInput = {
    id?: string;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
    promotions?: Prisma.promotionsCreateNestedOneWithoutClicksInput;
};
export type clicksUncheckedCreateInput = {
    id?: string;
    promotions_id?: string | null;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
};
export type clicksUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotions?: Prisma.promotionsUpdateOneWithoutClicksNestedInput;
};
export type clicksUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promotions_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksCreateManyInput = {
    id?: string;
    promotions_id?: string | null;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
};
export type clicksUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promotions_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promotions_id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    landing_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type clicksMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promotions_id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    landing_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type clicksMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    promotions_id?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    landing_url?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ClicksListRelationFilter = {
    every?: Prisma.clicksWhereInput;
    some?: Prisma.clicksWhereInput;
    none?: Prisma.clicksWhereInput;
};
export type clicksOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type clicksCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput> | Prisma.clicksCreateWithoutPromotionsInput[] | Prisma.clicksUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.clicksCreateOrConnectWithoutPromotionsInput | Prisma.clicksCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.clicksCreateManyPromotionsInputEnvelope;
    connect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
};
export type clicksUncheckedCreateNestedManyWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput> | Prisma.clicksCreateWithoutPromotionsInput[] | Prisma.clicksUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.clicksCreateOrConnectWithoutPromotionsInput | Prisma.clicksCreateOrConnectWithoutPromotionsInput[];
    createMany?: Prisma.clicksCreateManyPromotionsInputEnvelope;
    connect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
};
export type clicksUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput> | Prisma.clicksCreateWithoutPromotionsInput[] | Prisma.clicksUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.clicksCreateOrConnectWithoutPromotionsInput | Prisma.clicksCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.clicksUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.clicksUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.clicksCreateManyPromotionsInputEnvelope;
    set?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    disconnect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    delete?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    connect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    update?: Prisma.clicksUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.clicksUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.clicksUpdateManyWithWhereWithoutPromotionsInput | Prisma.clicksUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.clicksScalarWhereInput | Prisma.clicksScalarWhereInput[];
};
export type clicksUncheckedUpdateManyWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput> | Prisma.clicksCreateWithoutPromotionsInput[] | Prisma.clicksUncheckedCreateWithoutPromotionsInput[];
    connectOrCreate?: Prisma.clicksCreateOrConnectWithoutPromotionsInput | Prisma.clicksCreateOrConnectWithoutPromotionsInput[];
    upsert?: Prisma.clicksUpsertWithWhereUniqueWithoutPromotionsInput | Prisma.clicksUpsertWithWhereUniqueWithoutPromotionsInput[];
    createMany?: Prisma.clicksCreateManyPromotionsInputEnvelope;
    set?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    disconnect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    delete?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    connect?: Prisma.clicksWhereUniqueInput | Prisma.clicksWhereUniqueInput[];
    update?: Prisma.clicksUpdateWithWhereUniqueWithoutPromotionsInput | Prisma.clicksUpdateWithWhereUniqueWithoutPromotionsInput[];
    updateMany?: Prisma.clicksUpdateManyWithWhereWithoutPromotionsInput | Prisma.clicksUpdateManyWithWhereWithoutPromotionsInput[];
    deleteMany?: Prisma.clicksScalarWhereInput | Prisma.clicksScalarWhereInput[];
};
export type clicksCreateWithoutPromotionsInput = {
    id?: string;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
};
export type clicksUncheckedCreateWithoutPromotionsInput = {
    id?: string;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
};
export type clicksCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.clicksWhereUniqueInput;
    create: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput>;
};
export type clicksCreateManyPromotionsInputEnvelope = {
    data: Prisma.clicksCreateManyPromotionsInput | Prisma.clicksCreateManyPromotionsInput[];
    skipDuplicates?: boolean;
};
export type clicksUpsertWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.clicksWhereUniqueInput;
    update: Prisma.XOR<Prisma.clicksUpdateWithoutPromotionsInput, Prisma.clicksUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.clicksCreateWithoutPromotionsInput, Prisma.clicksUncheckedCreateWithoutPromotionsInput>;
};
export type clicksUpdateWithWhereUniqueWithoutPromotionsInput = {
    where: Prisma.clicksWhereUniqueInput;
    data: Prisma.XOR<Prisma.clicksUpdateWithoutPromotionsInput, Prisma.clicksUncheckedUpdateWithoutPromotionsInput>;
};
export type clicksUpdateManyWithWhereWithoutPromotionsInput = {
    where: Prisma.clicksScalarWhereInput;
    data: Prisma.XOR<Prisma.clicksUpdateManyMutationInput, Prisma.clicksUncheckedUpdateManyWithoutPromotionsInput>;
};
export type clicksScalarWhereInput = {
    AND?: Prisma.clicksScalarWhereInput | Prisma.clicksScalarWhereInput[];
    OR?: Prisma.clicksScalarWhereInput[];
    NOT?: Prisma.clicksScalarWhereInput | Prisma.clicksScalarWhereInput[];
    id?: Prisma.UuidFilter<"clicks"> | string;
    promotions_id?: Prisma.UuidNullableFilter<"clicks"> | string | null;
    ip?: Prisma.StringNullableFilter<"clicks"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"clicks"> | string | null;
    referrer?: Prisma.StringNullableFilter<"clicks"> | string | null;
    landing_url?: Prisma.StringNullableFilter<"clicks"> | string | null;
    created_at?: Prisma.DateTimeFilter<"clicks"> | Date | string;
};
export type clicksCreateManyPromotionsInput = {
    id?: string;
    ip?: string | null;
    user_agent?: string | null;
    referrer?: string | null;
    landing_url?: string | null;
    created_at?: Date | string;
};
export type clicksUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksUncheckedUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksUncheckedUpdateManyWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    landing_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clicksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promotions_id?: boolean;
    ip?: boolean;
    user_agent?: boolean;
    referrer?: boolean;
    landing_url?: boolean;
    created_at?: boolean;
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
}, ExtArgs["result"]["clicks"]>;
export type clicksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promotions_id?: boolean;
    ip?: boolean;
    user_agent?: boolean;
    referrer?: boolean;
    landing_url?: boolean;
    created_at?: boolean;
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
}, ExtArgs["result"]["clicks"]>;
export type clicksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    promotions_id?: boolean;
    ip?: boolean;
    user_agent?: boolean;
    referrer?: boolean;
    landing_url?: boolean;
    created_at?: boolean;
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
}, ExtArgs["result"]["clicks"]>;
export type clicksSelectScalar = {
    id?: boolean;
    promotions_id?: boolean;
    ip?: boolean;
    user_agent?: boolean;
    referrer?: boolean;
    landing_url?: boolean;
    created_at?: boolean;
};
export type clicksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "promotions_id" | "ip" | "user_agent" | "referrer" | "landing_url" | "created_at", ExtArgs["result"]["clicks"]>;
export type clicksInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
};
export type clicksIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
};
export type clicksIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    promotions?: boolean | Prisma.clicks$promotionsArgs<ExtArgs>;
};
export type $clicksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "clicks";
    objects: {
        promotions: Prisma.$promotionsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        promotions_id: string | null;
        ip: string | null;
        user_agent: string | null;
        referrer: string | null;
        landing_url: string | null;
        created_at: Date;
    }, ExtArgs["result"]["clicks"]>;
    composites: {};
};
export type clicksGetPayload<S extends boolean | null | undefined | clicksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$clicksPayload, S>;
export type clicksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<clicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClicksCountAggregateInputType | true;
};
export interface clicksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['clicks'];
        meta: {
            name: 'clicks';
        };
    };
    findUnique<T extends clicksFindUniqueArgs>(args: Prisma.SelectSubset<T, clicksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends clicksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, clicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends clicksFindFirstArgs>(args?: Prisma.SelectSubset<T, clicksFindFirstArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends clicksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, clicksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends clicksFindManyArgs>(args?: Prisma.SelectSubset<T, clicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends clicksCreateArgs>(args: Prisma.SelectSubset<T, clicksCreateArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends clicksCreateManyArgs>(args?: Prisma.SelectSubset<T, clicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends clicksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, clicksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends clicksDeleteArgs>(args: Prisma.SelectSubset<T, clicksDeleteArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends clicksUpdateArgs>(args: Prisma.SelectSubset<T, clicksUpdateArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends clicksDeleteManyArgs>(args?: Prisma.SelectSubset<T, clicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends clicksUpdateManyArgs>(args: Prisma.SelectSubset<T, clicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends clicksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, clicksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends clicksUpsertArgs>(args: Prisma.SelectSubset<T, clicksUpsertArgs<ExtArgs>>): Prisma.Prisma__clicksClient<runtime.Types.Result.GetResult<Prisma.$clicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends clicksCountArgs>(args?: Prisma.Subset<T, clicksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClicksCountAggregateOutputType> : number>;
    aggregate<T extends ClicksAggregateArgs>(args: Prisma.Subset<T, ClicksAggregateArgs>): Prisma.PrismaPromise<GetClicksAggregateType<T>>;
    groupBy<T extends clicksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: clicksGroupByArgs['orderBy'];
    } : {
        orderBy?: clicksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, clicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: clicksFieldRefs;
}
export interface Prisma__clicksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    promotions<T extends Prisma.clicks$promotionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clicks$promotionsArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface clicksFieldRefs {
    readonly id: Prisma.FieldRef<"clicks", 'String'>;
    readonly promotions_id: Prisma.FieldRef<"clicks", 'String'>;
    readonly ip: Prisma.FieldRef<"clicks", 'String'>;
    readonly user_agent: Prisma.FieldRef<"clicks", 'String'>;
    readonly referrer: Prisma.FieldRef<"clicks", 'String'>;
    readonly landing_url: Prisma.FieldRef<"clicks", 'String'>;
    readonly created_at: Prisma.FieldRef<"clicks", 'DateTime'>;
}
export type clicksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where: Prisma.clicksWhereUniqueInput;
};
export type clicksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where: Prisma.clicksWhereUniqueInput;
};
export type clicksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where?: Prisma.clicksWhereInput;
    orderBy?: Prisma.clicksOrderByWithRelationInput | Prisma.clicksOrderByWithRelationInput[];
    cursor?: Prisma.clicksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClicksScalarFieldEnum | Prisma.ClicksScalarFieldEnum[];
};
export type clicksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where?: Prisma.clicksWhereInput;
    orderBy?: Prisma.clicksOrderByWithRelationInput | Prisma.clicksOrderByWithRelationInput[];
    cursor?: Prisma.clicksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClicksScalarFieldEnum | Prisma.ClicksScalarFieldEnum[];
};
export type clicksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where?: Prisma.clicksWhereInput;
    orderBy?: Prisma.clicksOrderByWithRelationInput | Prisma.clicksOrderByWithRelationInput[];
    cursor?: Prisma.clicksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClicksScalarFieldEnum | Prisma.ClicksScalarFieldEnum[];
};
export type clicksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.clicksCreateInput, Prisma.clicksUncheckedCreateInput>;
};
export type clicksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.clicksCreateManyInput | Prisma.clicksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type clicksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    data: Prisma.clicksCreateManyInput | Prisma.clicksCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.clicksIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type clicksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.clicksUpdateInput, Prisma.clicksUncheckedUpdateInput>;
    where: Prisma.clicksWhereUniqueInput;
};
export type clicksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.clicksUpdateManyMutationInput, Prisma.clicksUncheckedUpdateManyInput>;
    where?: Prisma.clicksWhereInput;
    limit?: number;
};
export type clicksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.clicksUpdateManyMutationInput, Prisma.clicksUncheckedUpdateManyInput>;
    where?: Prisma.clicksWhereInput;
    limit?: number;
    include?: Prisma.clicksIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type clicksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where: Prisma.clicksWhereUniqueInput;
    create: Prisma.XOR<Prisma.clicksCreateInput, Prisma.clicksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.clicksUpdateInput, Prisma.clicksUncheckedUpdateInput>;
};
export type clicksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
    where: Prisma.clicksWhereUniqueInput;
};
export type clicksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clicksWhereInput;
    limit?: number;
};
export type clicks$promotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    include?: Prisma.promotionsInclude<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
};
export type clicksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clicksSelect<ExtArgs> | null;
    omit?: Prisma.clicksOmit<ExtArgs> | null;
    include?: Prisma.clicksInclude<ExtArgs> | null;
};
export {};
