import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productsModel = runtime.Types.Result.DefaultSelection<Prisma.$productsPayload>;
export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type ProductsAvgAggregateOutputType = {
    category_id: number | null;
};
export type ProductsSumAggregateOutputType = {
    category_id: number | null;
};
export type ProductsMinAggregateOutputType = {
    id: string | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type ProductsMaxAggregateOutputType = {
    id: string | null;
    category_id: number | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type ProductsCountAggregateOutputType = {
    id: number;
    category_id: number;
    name: number;
    description: number;
    created_at: number;
    _all: number;
};
export type ProductsAvgAggregateInputType = {
    category_id?: true;
};
export type ProductsSumAggregateInputType = {
    category_id?: true;
};
export type ProductsMinAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
};
export type ProductsMaxAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
};
export type ProductsCountAggregateInputType = {
    id?: true;
    category_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    _all?: true;
};
export type ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductsCountAggregateInputType;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducts[P]> : Prisma.GetScalarType<T[P], AggregateProducts[P]>;
};
export type productsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithAggregationInput | Prisma.productsOrderByWithAggregationInput[];
    by: Prisma.ProductsScalarFieldEnum[] | Prisma.ProductsScalarFieldEnum;
    having?: Prisma.productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type ProductsGroupByOutputType = {
    id: string;
    category_id: number | null;
    name: string;
    description: string | null;
    created_at: Date;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]>;
}>>;
export type productsWhereInput = {
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    id?: Prisma.UuidFilter<"products"> | string;
    category_id?: Prisma.IntNullableFilter<"products"> | number | null;
    name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
    product_images?: Prisma.Product_imagesListRelationFilter;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    promotions?: Prisma.PromotionsListRelationFilter;
};
export type productsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    product_images?: Prisma.product_imagesOrderByRelationAggregateInput;
    categories?: Prisma.categoriesOrderByWithRelationInput;
    promotions?: Prisma.promotionsOrderByRelationAggregateInput;
};
export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    category_id?: Prisma.IntNullableFilter<"products"> | number | null;
    name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
    product_images?: Prisma.Product_imagesListRelationFilter;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    promotions?: Prisma.PromotionsListRelationFilter;
}, "id">;
export type productsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.productsCountOrderByAggregateInput;
    _avg?: Prisma.productsAvgOrderByAggregateInput;
    _max?: Prisma.productsMaxOrderByAggregateInput;
    _min?: Prisma.productsMinOrderByAggregateInput;
    _sum?: Prisma.productsSumOrderByAggregateInput;
};
export type productsScalarWhereWithAggregatesInput = {
    AND?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    OR?: Prisma.productsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"products"> | string;
    category_id?: Prisma.IntNullableWithAggregatesFilter<"products"> | number | null;
    name?: Prisma.StringWithAggregatesFilter<"products"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"products"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"products"> | Date | string;
};
export type productsCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    promotions?: Prisma.promotionsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateInput = {
    id?: string;
    category_id?: number | null;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    promotions?: Prisma.promotionsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    promotions?: Prisma.promotionsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    promotions?: Prisma.promotionsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyInput = {
    id?: string;
    category_id?: number | null;
    name: string;
    description?: string | null;
    created_at?: Date | string;
};
export type productsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductsListRelationFilter = {
    every?: Prisma.productsWhereInput;
    some?: Prisma.productsWhereInput;
    none?: Prisma.productsWhereInput;
};
export type productsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type productsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsAvgOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type productsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsSumOrderByAggregateInput = {
    category_id?: Prisma.SortOrder;
};
export type ProductsNullableScalarRelationFilter = {
    is?: Prisma.productsWhereInput | null;
    isNot?: Prisma.productsWhereInput | null;
};
export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type productsCreateNestedOneWithoutPromotionsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutPromotionsInput, Prisma.productsUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutPromotionsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutPromotionsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutPromotionsInput, Prisma.productsUncheckedCreateWithoutPromotionsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutPromotionsInput;
    upsert?: Prisma.productsUpsertWithoutPromotionsInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutPromotionsInput, Prisma.productsUpdateWithoutPromotionsInput>, Prisma.productsUncheckedUpdateWithoutPromotionsInput>;
};
export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_imagesInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneWithoutProduct_imagesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_imagesInput;
    upsert?: Prisma.productsUpsertWithoutProduct_imagesInput;
    disconnect?: Prisma.productsWhereInput | boolean;
    delete?: Prisma.productsWhereInput | boolean;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_imagesInput, Prisma.productsUpdateWithoutProduct_imagesInput>, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
};
export type productsCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    promotions?: Prisma.promotionsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    promotions?: Prisma.promotionsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsCreateManyCategoriesInputEnvelope = {
    data: Prisma.productsCreateManyCategoriesInput | Prisma.productsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    update: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
};
export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.productsScalarWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyWithoutCategoriesInput>;
};
export type productsScalarWhereInput = {
    AND?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    OR?: Prisma.productsScalarWhereInput[];
    NOT?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    id?: Prisma.UuidFilter<"products"> | string;
    category_id?: Prisma.IntNullableFilter<"products"> | number | null;
    name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
};
export type productsCreateWithoutPromotionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
};
export type productsUncheckedCreateWithoutPromotionsInput = {
    id?: string;
    category_id?: number | null;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutPromotionsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutPromotionsInput, Prisma.productsUncheckedCreateWithoutPromotionsInput>;
};
export type productsUpsertWithoutPromotionsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutPromotionsInput, Prisma.productsUncheckedUpdateWithoutPromotionsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutPromotionsInput, Prisma.productsUncheckedCreateWithoutPromotionsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutPromotionsInput, Prisma.productsUncheckedUpdateWithoutPromotionsInput>;
};
export type productsUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutPromotionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutProduct_imagesInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    categories?: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    promotions?: Prisma.promotionsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_imagesInput = {
    id?: string;
    category_id?: number | null;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    promotions?: Prisma.promotionsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
};
export type productsUpsertWithoutProduct_imagesInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_imagesInput, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_imagesInput, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
};
export type productsUpdateWithoutProduct_imagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.categoriesUpdateOneWithoutProductsNestedInput;
    promotions?: Prisma.promotionsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promotions?: Prisma.promotionsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
};
export type productsUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    promotions?: Prisma.promotionsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    promotions?: Prisma.promotionsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductsCountOutputType = {
    product_images: number;
    promotions: number;
};
export type ProductsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs;
    promotions?: boolean | ProductsCountOutputTypeCountPromotionsArgs;
};
export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductsCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_imagesWhereInput;
};
export type ProductsCountOutputTypeCountPromotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotionsWhereInput;
};
export type productsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    product_images?: boolean | Prisma.products$product_imagesArgs<ExtArgs>;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
    promotions?: boolean | Prisma.products$promotionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectScalar = {
    id?: boolean;
    category_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
};
export type productsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "category_id" | "name" | "description" | "created_at", ExtArgs["result"]["products"]>;
export type productsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_images?: boolean | Prisma.products$product_imagesArgs<ExtArgs>;
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
    promotions?: boolean | Prisma.products$promotionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type productsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
};
export type productsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.products$categoriesArgs<ExtArgs>;
};
export type $productsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "products";
    objects: {
        product_images: Prisma.$product_imagesPayload<ExtArgs>[];
        categories: Prisma.$categoriesPayload<ExtArgs> | null;
        promotions: Prisma.$promotionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        category_id: number | null;
        name: string;
        description: string | null;
        created_at: Date;
    }, ExtArgs["result"]["products"]>;
    composites: {};
};
export type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productsPayload, S>;
export type productsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true;
};
export interface productsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['products'];
        meta: {
            name: 'products';
        };
    };
    findUnique<T extends productsFindUniqueArgs>(args: Prisma.SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productsFindFirstArgs>(args?: Prisma.SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productsFindManyArgs>(args?: Prisma.SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productsCreateArgs>(args: Prisma.SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productsCreateManyArgs>(args?: Prisma.SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends productsDeleteArgs>(args: Prisma.SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productsUpdateArgs>(args: Prisma.SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productsDeleteManyArgs>(args?: Prisma.SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productsUpdateManyArgs>(args: Prisma.SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends productsUpsertArgs>(args: Prisma.SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productsCountArgs>(args?: Prisma.Subset<T, productsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductsCountAggregateOutputType> : number>;
    aggregate<T extends ProductsAggregateArgs>(args: Prisma.Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>;
    groupBy<T extends productsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productsGroupByArgs['orderBy'];
    } : {
        orderBy?: productsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productsFieldRefs;
}
export interface Prisma__productsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_images<T extends Prisma.products$product_imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categories<T extends Prisma.products$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$categoriesArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    promotions<T extends Prisma.products$promotionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productsFieldRefs {
    readonly id: Prisma.FieldRef<"products", 'String'>;
    readonly category_id: Prisma.FieldRef<"products", 'Int'>;
    readonly name: Prisma.FieldRef<"products", 'String'>;
    readonly description: Prisma.FieldRef<"products", 'String'>;
    readonly created_at: Prisma.FieldRef<"products", 'DateTime'>;
}
export type productsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
};
export type productsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.productsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type productsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
    where: Prisma.productsWhereUniqueInput;
};
export type productsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type productsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
    include?: Prisma.productsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type productsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
};
export type productsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type products$product_imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_imagesScalarFieldEnum | Prisma.Product_imagesScalarFieldEnum[];
};
export type products$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
};
export type products$promotionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
};
export {};
