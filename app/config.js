export const config = {
  assembly: {
    name: "macFas5",
    sequence: {
      type: "ReferenceSequenceTrack",
      trackId: "macFas5-1477673.8000000715",
      adapter: {
        type: "BgzipFastaAdapter",
        fastaLocation: {
          locationType: "UriLocation",
          uri: "https://alist.xiaohanys.xyz/d/Yidong/Bioinformatics/macFas5.fa.gz",
        },
        faiLocation: {
          locationType: "UriLocation",
          uri: "https://alist.xiaohanys.xyz/d/Yidong/Bioinformatics/macFas5.fa.gz.fai",
        },
        gziLocation: {
          locationType: "UriLocation",
          uri: "https://alist.xiaohanys.xyz/d/Yidong/Bioinformatics/macFas5.fa.gz.gzi",
        },
      },
      displays: [
        {
          type: "LinearReferenceSequenceDisplay",
          displayId:
            "macFas5-1477673.8000000715-LinearReferenceSequenceDisplay",
        },
        {
          type: "LinearGCContentDisplay",
          displayId: "macFas5-1477673.8000000715-LinearGCContentDisplay",
        },
      ],
    },
    displayName: "macFas5",
  },
  tracks: [
    {
      type: "FeatureTrack",
      trackId: "i?2mknfvjwcrcld&pwd=p4zq-1744940133012",
      name: "atlas",
      assemblyNames: ["macFas5"],
      adapter: {
        type: "BedTabixAdapter",
        bedGzLocation: {
          locationType: "UriLocation",
          uri: "https://alist.xiaohanys.xyz/d/Yidong/Bioinformatics/macFas5_RNA_editing.bed.gz",
        },
        index: {
          location: {
            locationType: "UriLocation",
            uri: "https://alist.xiaohanys.xyz/d/Yidong/Bioinformatics/macFas5_RNA_editing.bed.gz.tbi",
          },
        },
      },
      displays: [
        {
          type: "LinearBasicDisplay",
          displayId:
            "i?2mknfvjwcrcld&pwd=p4zq-1744940133012-LinearBasicDisplay",
          renderer: {
            type: "SvgFeatureRenderer",
            color1: "rgb(228, 26, 28)",
          },
        },
        {
          type: "LinearArcDisplay",
          displayId: "i?2mknfvjwcrcld&pwd=p4zq-1744940133012-LinearArcDisplay",
        },
      ],
    },
    {
      type: "FeatureTrack",
      trackId: "rmsk_macFas5",
      name: "UCSC RepeatMasker",
      assemblyNames: ["macFas5"],
      category: ["Repeats"],
      adapter: {
        type: "UCSCAdapter",
        base: {
          locationType: "UriLocation",
          uri: "https://api.genome.ucsc.edu",
        },
        track: "rmsk",
      },
      displays: [
        {
          type: "LinearBasicDisplay",
          displayId: "rmsk_display",
          renderer: {
            type: "SvgFeatureRenderer",
            color1: "rgb(153, 153, 153)",
            labels: { name: "jexl:get(feature,'repName')" },
          },
        },
        {
          type: "LinearArcDisplay",
          displayId: "rmsk_macFas5-LinearArcDisplay",
        },
      ],
    },
    {
      type: "FeatureTrack",
      trackId: "knownGene",
      name: "UCSC knownGene",
      assemblyNames: ["macFas5"],
      category: ["Annotation"],
      adapter: {
        type: "UCSCAdapter",
        base: {
          locationType: "UriLocation",
          uri: "https://api.genome.ucsc.edu",
        },
        track: "ensGene",
      },
      displays: [
        {
          type: "LinearBasicDisplay",
          displayId: "knownGene-LinearBasicDisplay",
        },
        { type: "LinearArcDisplay", displayId: "knownGene-LinearArcDisplay" },
      ],
    },
  ],
  defaultSession: {
    id: "lQix96toloWuVW03OUeCx",
    name: "this session",
    margin: 0,
    drawerPosition: "right",
    drawerWidth: 384,
    widgets: {
      hierarchicalTrackSelector: {
        id: "hierarchicalTrackSelector",
        type: "HierarchicalTrackSelectorWidget",
        view: "linearGenomeView",
        faceted: {
          filterText: "",
          showSparse: false,
          showFilters: true,
          showOptions: false,
          panelWidth: 400,
        },
      },
    },
    activeWidgets: {},
    minimized: false,
    connectionInstances: [],
    sessionTracks: [],
    view: {
      id: "linearGenomeView",
      minimized: false,
      type: "LinearGenomeView",
      offsetPx: 3230080,
      bpPerPx: 3.7725856697819315,
      displayedRegions: [
        {
          reversed: false,
          refName: "chr1",
          start: 0,
          end: 227556264,
          assemblyName: "macFas5",
        },
      ],
      tracks: [
        {
          id: "zs0toPLY4RAIbY0uzxPDY",
          type: "ReferenceSequenceTrack",
          configuration: "macFas5-1477673.8000000715",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "foXvOwJ2S7c-02JBs96tN",
              type: "LinearReferenceSequenceDisplay",
              heightPreConfig: 127,
              configuration:
                "macFas5-1477673.8000000715-LinearReferenceSequenceDisplay",
              showForward: true,
              showReverse: true,
              showTranslation: true,
            },
          ],
        },
        {
          id: "HEhzBsEQG4tm-9Yfixbgk",
          type: "FeatureTrack",
          configuration: "i?2mknfvjwcrcld&pwd=p4zq-1744940133012",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "28c1SSLt_FMuAXpCJw8o1",
              type: "LinearBasicDisplay",
              heightPreConfig: 371,
              configuration:
                "i?2mknfvjwcrcld&pwd=p4zq-1744940133012-LinearBasicDisplay",
            },
          ],
        },
        {
          id: "OZYdoGbfQ8xNSeYJz_x5K",
          type: "FeatureTrack",
          configuration: "rmsk_macFas5",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "m5ITuW93rctmsWBLbSGuO",
              type: "LinearBasicDisplay",
              heightPreConfig: 157,
              configuration: "rmsk_display",
            },
          ],
        },
        {
          id: "th7igN0QOCxt0q9rgHE3o",
          type: "FeatureTrack",
          configuration: "knownGene",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "IE_RruIgdidUnlN9fDFVf",
              type: "LinearBasicDisplay",
              heightPreConfig: 297,
              configuration: "knownGene-LinearBasicDisplay",
            },
          ],
        },
      ],
      hideHeader: false,
      hideHeaderOverview: false,
      hideNoTracksActive: false,
      trackSelectorType: "hierarchical",
      showCenterLine: false,
      showCytobandsSetting: true,
      trackLabels: "",
      showGridlines: true,
      highlight: [],
      colorByCDS: false,
      showTrackOutlines: true,
    },
  },
};
