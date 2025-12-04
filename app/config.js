export const config = {
  assembly: {
    name: "macFas5",
    sequence: {
      type: "ReferenceSequenceTrack",
      trackId: "macFas5-refseq",
      adapter: {
        type: "TwoBitAdapter",
        twoBitLocation: {
          locationType: "UriLocation",
          uri: "https://hgdownload.soe.ucsc.edu/goldenPath/macFas5/bigZips/macFas5.2bit",
        },
        chromSizesLocation: {
          locationType: "UriLocation",
          uri: "https://hgdownload.soe.ucsc.edu/goldenPath/macFas5/bigZips/macFas5.chrom.sizes",
        },
      },
      displays: [
        {
          type: "LinearReferenceSequenceDisplay",
          displayId: "macFas5-refseq-LinearReferenceSequenceDisplay",
        },
        {
          type: "LinearGCContentDisplay",
          displayId: "macFas5-refseq-LinearGCContentDisplay",
        },
      ],
    },
    displayName: "macFas5",
  },
  tracks: [
    {
      type: "FeatureTrack",
      trackId: "macFas5-refGene",
      name: "NCBI RefSeq - UCSC RefSeq",
      assemblyNames: ["macFas5"],
      adapter: {
        type: "Gff3TabixAdapter",
        gffGzLocation: {
          uri: "https://jbrowse.org/ucsc/macFas5/refGene.gff.gz",
        },
        index: {
          indexType: "CSI",
          location: {
            uri: "https://jbrowse.org/ucsc/macFas5/refGene.gff.gz.csi",
          },
        },
      },
    },
    {
      type: "FeatureTrack",
      trackId: "atlas-1764871695993-sessionTrack",
      name: "atlas",
      assemblyNames: ["macFas5"],
      adapter: {
        type: "BedTabixAdapter",
        bedGzLocation: {
          locationType: "UriLocation",
          uri: "https://www.modelscope.cn/datasets/Xiaohanys/RNAediting/resolve/master/macFas5_RNA_editing.bed.gz",
        },
        index: {
          location: {
            locationType: "UriLocation",
            uri: "https://www.modelscope.cn/datasets/Xiaohanys/RNAediting/resolve/master/macFas5_RNA_editing.bed.gz.tbi",
          },
        },
      },
      displays: [
        {
          type: "LinearBasicDisplay",
          displayId: "atlas-1764871695993-sessionTrack-LinearBasicDisplay",
          renderer: {
            type: "SvgFeatureRenderer",
            color1: "rgb(228, 125, 127)",
          },
        },
        {
          type: "LinearArcDisplay",
          displayId: "atlas-1764871695993-sessionTrack-LinearArcDisplay",
        },
      ],
    },
    {
      type: "FeatureTrack",
      trackId: "macFas5-rmsk",
      name: "RepeatMasker",
      assemblyNames: ["macFas5"],
      adapter: {
        type: "BedTabixAdapter",
        bedGzLocation: {
          uri: "https://jbrowse.org/ucsc/macFas5/rmsk.bed.gz",
        },
        index: {
          indexType: "CSI",
          location: {
            uri: "https://jbrowse.org/ucsc/macFas5/rmsk.bed.gz.csi",
          },
        },
      },
    },
  ],
  defaultSession: {
    id: "J3aafd9Pmvl7cX6Lmbiz8",
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
      offsetPx: 7879704,
      bpPerPx: 19.864630880203645,
      displayedRegions: [
        {
          reversed: false,
          refName: "chr5",
          start: 0,
          end: 189454096,
          assemblyName: "macFas5",
        },
      ],
      tracks: [
        {
          id: "P9sRQSEcN4zqnoZuiEA3C",
          type: "FeatureTrack",
          configuration: "atlas-1764871695993-sessionTrack",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "Y3B9Nhgmvdh_Nf55JExth",
              type: "LinearBasicDisplay",
              heightPreConfig: 263,
              configuration:
                "atlas-1764871695993-sessionTrack-LinearBasicDisplay",
            },
          ],
        },
        {
          id: "p5if8dWeWRFFFQIkt2-Fm",
          type: "FeatureTrack",
          configuration: "macFas5-rmsk",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "VaNVpBX5P-M1LMotAHivE",
              type: "LinearBasicDisplay",
              heightPreConfig: 117,
              configuration: "macFas5-rmsk-LinearBasicDisplay",
            },
          ],
        },
        {
          id: "4FHwND87q5O5H5I7AtaK6",
          type: "FeatureTrack",
          configuration: "macFas5-refGene",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "4bi_F5MyVcVVhP6UeG61J",
              type: "LinearBasicDisplay",
              heightPreConfig: 41,
              configuration: "macFas5-refGene-LinearBasicDisplay",
            },
          ],
        },
        {
          id: "ad_xmPYoT64--3SPvXLKv",
          type: "ReferenceSequenceTrack",
          configuration: "macFas5-refseq",
          minimized: false,
          pinned: false,
          displays: [
            {
              id: "DdffJz26_1AbkTljQkhEk",
              type: "LinearReferenceSequenceDisplay",
              heightPreConfig: 50,
              configuration: "macFas5-refseq-LinearReferenceSequenceDisplay",
              showForward: true,
              showReverse: true,
              showTranslation: true,
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
