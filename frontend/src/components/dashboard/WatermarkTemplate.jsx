import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    fontSize: 10,
  },
  // Watermark
  watermark: {
    position: "absolute",
    top: "50%",
    left: "10%",
    fontSize: 48,
    color: "#00000010",
    fontFamily: "Helvetica-Bold",
    transform: "rotate(-35deg)",
  },
  // Header
  header: {
    borderBottom: "2px solid #5f00e3",
    paddingBottom: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#000666",
    textAlign: "center",
  },
  jobTitle: {
    fontSize: 10,
    color: "#454652",
    textAlign: "center",
    marginTop: 4,
    fontStyle: "italic",
  },
  // Section
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#5f00e3",
    textTransform: "uppercase",
    letterSpacing: 2,
    borderBottom: "1px solid #e6e8ea",
    paddingBottom: 4,
    marginBottom: 8,
  },
  // Summary
  summaryText: {
    fontSize: 10,
    color: "#191c1e",
    lineHeight: 1.6,
  },
  // Skills
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillBadge: {
    backgroundColor: "#e0e0ff",
    color: "#000767",
    fontSize: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontFamily: "Helvetica-Bold",
  },
  // Experience & Projects
  itemContainer: {
    marginBottom: 10,
    paddingLeft: 12,
    borderLeft: "2px solid #e6e8ea",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#5f00e3",
    marginLeft: -16,
    marginBottom: 4,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#000666",
  },
  itemDuration: {
    fontSize: 8,
    color: "#767683",
  },
  itemCompany: {
    fontSize: 9,
    color: "#5f00e3",
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    color: "#454652",
    marginLeft: 8,
    marginBottom: 2,
    lineHeight: 1.5,
  },
  // Links
  linksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  linkCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f4f6",
    borderRadius: 8,
    padding: 6,
    width: "47%",
    gap: 6,
  },
  linkBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  linkLabel: {
    fontSize: 7,
    color: "#767683",
    fontFamily: "Helvetica-Bold",
  },
  linkValue: {
    fontSize: 8,
    color: "#000666",
    fontFamily: "Helvetica-Bold",
  },
});

export default function ResumeTemplate({ data, showWatermark = true }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Watermark */}
        {showWatermark && (
          <Text style={[styles.watermark, { position: "absolute" }]} fixed>
            AI RESUME BY KINXA
          </Text>
        )}

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data?.name || "Your Name"}</Text>
          <Text style={styles.jobTitle}>
            {data?.title || "Professional Title"}
          </Text>
        </View>

        {/* Summary */}
        {data?.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{data.summary}</Text>
          </View>
        )}

        {/* Skills */}
        {data?.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Expertise</Text>
            <View style={styles.skillsRow}>
              {data.skills.map((skill, i) => (
                <Text key={i} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Experience */}
        {data?.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.dot} />
                <View style={styles.itemHeader}>
                  <Text style={styles.itemRole}>
                    {exp.role} | {exp.company}
                  </Text>
                  <Text style={styles.itemDuration}>{exp.duration}</Text>
                </View>
                {exp.details?.map((d, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {d}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {/* Projects */}
        {data?.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.dot} />

                {/* Title + Live link */}
                <View style={styles.itemHeader}>
                  <Text style={styles.itemRole}>{proj.title}</Text>
                  <Text style={styles.itemDuration}>{proj.live}</Text>
                </View>

                {/* Tech stack */}
                <Text style={styles.itemCompany}>
                  Tech: {proj.techstack?.join(", ")}
                </Text>

                {/* Details — array map karo */}
                {proj.details?.map((d, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {d}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Professional Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Links</Text>
          <View style={styles.linksGrid}>
            {data?.linkedin && (
              <View style={styles.linkCard}>
                <View
                  style={[styles.linkBadge, { backgroundColor: "#0077b5" }]}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      color: "white",
                      fontFamily: "Helvetica-Bold",
                    }}
                  >
                    in
                  </Text>
                </View>
                <View>
                  <Text style={styles.linkLabel}>LinkedIn</Text>
                  <Text style={styles.linkValue}>{data.linkedin}</Text>
                </View>
              </View>
            )}

            {data?.github && (
              <View style={styles.linkCard}>
                <View
                  style={[styles.linkBadge, { backgroundColor: "#191c1e" }]}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      color: "white",
                      fontFamily: "Helvetica-Bold",
                    }}
                  >
                    gh
                  </Text>
                </View>
                <View>
                  <Text style={styles.linkLabel}>GitHub</Text>
                  <Text style={styles.linkValue}>{data.github}</Text>
                </View>
              </View>
            )}

            {data?.email && (
              <View style={styles.linkCard}>
                <View
                  style={[styles.linkBadge, { backgroundColor: "#ff5e8e" }]}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      color: "white",
                      fontFamily: "Helvetica-Bold",
                    }}
                  >
                    @
                  </Text>
                </View>
                <View>
                  <Text style={styles.linkLabel}>Email</Text>
                  <Text style={styles.linkValue}>{data.email}</Text>
                </View>
              </View>
            )}

            {data?.portfolio && (
              <View style={styles.linkCard}>
                <View
                  style={[styles.linkBadge, { backgroundColor: "#5f00e3" }]}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      color: "white",
                      fontFamily: "Helvetica-Bold",
                    }}
                  >
                    W
                  </Text>
                </View>
                <View>
                  <Text style={styles.linkLabel}>Portfolio</Text>
                  <Text style={styles.linkValue}>{data.portfolio}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}
