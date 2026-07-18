import { defineField, defineType } from 'sanity';

export const series = defineType({
  name: 'series',
  title: 'シリーズ',
  type: 'document',
  fields: [
    defineField({
      name: 'seriesId',
      title: 'シリーズID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: '英語シリーズ名',
      type: 'string',
    }),
    defineField({
      name: 'titleJa',
      title: '日本語シリーズ名',
      type: 'string',
    }),
    defineField({
      name: 'descriptionEn',
      title: '英語説明',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionJa',
      title: '日本語説明',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'coverImage',
      title: '代表画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sortOrder',
      title: '表示順',
      type: 'number',
    }),
    defineField({
      name: 'published',
      title: '公開する',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titleJa',
      subtitle: 'seriesId',
      media: 'coverImage',
    },
  },
});
